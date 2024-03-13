import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';

import { fetchMovies } from '../../services/api';

import MoviesList from 'components/MoviesList';
import Pagination from 'components/Pagination';

import { HomeWrapper } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('page'));
  const pageFromURL = parseInt(searchParams.get('page') || '1', 10);

  useEffect(() => {
    setPage(pageFromURL);
  }, [pageFromURL]);

  useEffect(() => {
    async function getPopularMovies() {
      try {
        const result = await fetchMovies(pageFromURL);
        const { results } = result;
        setMovies([...results]);
        const maxPagesAllowed = 500;
        setTotalPages(Math.min(result.total_pages, maxPagesAllowed));
      } catch (error) {
        console.log(error);
        Notiflix.Notify.failure('Something went wrong please try again later');
      }
    }
    getPopularMovies();
  }, [pageFromURL]);

  const handlePageChange = newPage => {
    setSearchParams({ page: newPage });
  };
  return (
    <HomeWrapper>
      <MoviesList moviesList={movies} currentPage={page} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </HomeWrapper>
  );
};

export default Home;
