import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';

import { fetchMoviesByQuery } from '../../services/api';

import MoviesList from 'components/MoviesList';
import Pagination from 'components/Pagination';

import { IoSearch } from 'react-icons/io5';

import { Wrapper, Form, FormWrapper, Input, SubmitBtn } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const userQuery = searchParams.get('query');
  const pageFromURL = parseInt(searchParams.get('page') || '1', 10);

  useEffect(() => {
    setQuery(userQuery || '');
    setPage(pageFromURL);
  }, [pageFromURL, userQuery]);

  useEffect(() => {
    if (userQuery) {
      getPopularMovies();
    }
    async function getPopularMovies() {
      try {
        const result = await fetchMoviesByQuery(userQuery, page);
        setMovies(result.results);
        setTotalPages(Math.min(result.total_pages, 500));
      } catch (error) {
        console.error(error);
        Notiflix.Notify.failure('Something went wrong please try again later');
      }
    }
  }, [page, userQuery]);

  const handleQueryChange = e => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    setPage(1);
    setSearchParams({ query: query, page: 1 });
  };

  const handlePageChange = newPage => {
    setPage(newPage);
    setSearchParams({ query: query, page: newPage });
  };

  return (
    <Wrapper>
      <Form onSubmit={handleFormSubmit}>
        <FormWrapper>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={query} // Ensure the input displays the current query
            onChange={handleQueryChange}
          />
          <SubmitBtn type="submit">
            <IoSearch />
          </SubmitBtn>
        </FormWrapper>
      </Form>

      <MoviesList moviesList={movies} currentPage={page} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Wrapper>
  );
};

export default Movies;
