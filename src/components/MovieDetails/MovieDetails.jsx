import { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { GrLinkPrevious } from 'react-icons/gr';

import MovieCard from 'components/MovieCard';

import { Wrapper, ListItem, GoToLink, GoBackLink } from './MovieDetails.styled';

import { fetchMovieById } from 'services/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const backLink = location.state?.from || '/';

  useEffect(() => {
    if (!movieId) return;
    async function getmovieById(movieId) {
      try {
        const result = await fetchMovieById(movieId);
        setMovie(result);
      } catch (error) {
        console.log(error);
      }
    }
    getmovieById(movieId);
  }, [movieId]);

  return (
    <Wrapper>
      <GoBackLink to={backLink}>
        <GrLinkPrevious />
        <span>Back to {backLink.includes('movies') ? 'Movies' : 'Home'}</span>
      </GoBackLink>
      {movie ? <MovieCard movie={movie} /> : 'Loading...'}
      <ul>
        <ListItem>
          <GoToLink to={`cast`} state={{ from: backLink }}>
            Cast
          </GoToLink>
        </ListItem>
        <ListItem>
          <GoToLink to={`reviews`} state={{ from: backLink }}>
            Reviews
          </GoToLink>
        </ListItem>
      </ul>
      <Outlet />
    </Wrapper>
  );
};
export default MovieDetails;
