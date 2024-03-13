import { MoviesListItem } from './MoviesListItem';
import { Movielist } from './MoviesList.styled';

const MoviesList = ({ moviesList, currentPage }) => {
  return (
    <Movielist>
      {moviesList.map(movie => {
        return (
          <MoviesListItem
            movie={movie}
            key={movie.id}
            currentPage={currentPage}
          />
        );
      })}
    </Movielist>
  );
};
export default MoviesList;
