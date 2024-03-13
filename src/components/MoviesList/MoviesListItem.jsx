import { useLocation, useSearchParams } from 'react-router-dom';

import {
  MovieCardLink,
  ListItem,
  MovieTitle,
  MovieImage,
} from './MoviesList.styled';
const NO_POSTER =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';

export const MoviesListItem = ({ movie }) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  return (
    <ListItem>
      <MovieCardLink
        to={`/movies/${movie.id}`}
        state={{
          from: location.pathname + location.search,
          page: searchParams.get('page'),
        }}
      >
        <MovieImage
          src={
            movie.poster_path === null
              ? `${NO_POSTER}`
              : `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
          }
          alt={movie.title}
          width="150"
        />
        <MovieTitle>{movie.title}</MovieTitle>
      </MovieCardLink>
    </ListItem>
  );
};
