import {
  Wrapper,
  TitleWrapper,
  TableWrapper,
  Tagline,
  Table,
  Descr,
  Img,
} from './MovieCard.styled';

const MovieCard = ({ movie }) => {
  const {
    poster_path,
    title,
    tagline,
    release_date,
    genres,
    production_countries,
    original_title,
    status,
    vote_average,
    overview,
  } = movie;
  const getYear = dateStr => {
    if (dateStr) {
      return dateStr.slice(0, 4);
    }
    return 'Unknown';
  };
  const getNames = arr => {
    if (arr) {
      return arr.map(item => item.name);
    }
    return 'No Data';
  };
  const NO_POSTER =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';
  return (
    <Wrapper>
      <div>
        <Img
          src={
            movie.poster_path === null
              ? `${NO_POSTER}`
              : `https://image.tmdb.org/t/p/w300/${poster_path}`
          }
          alt={title}
        />
      </div>
      <TableWrapper>
        <TitleWrapper>
          <h1>{movie.title}</h1>
          <Tagline>
            <i>{tagline}</i>
          </Tagline>
        </TitleWrapper>
        <Table>
          <tbody>
            <tr>
              <td>Original:</td>
              <td>{original_title}</td>
            </tr>

            <tr>
              <td>Release:</td>
              <td>{getYear(release_date)}</td>
            </tr>
            <tr>
              <td>Genres:</td>
              <td>{getNames(genres).join(', ')}</td>
            </tr>
            <tr>
              <td>Country:</td>
              <td>{getNames(production_countries).join(', ')}</td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>{status}</td>
            </tr>
            <tr>
              <td>Vote:</td>
              <td>{vote_average}</td>
            </tr>
          </tbody>
        </Table>
        <Descr>Description:</Descr>
        <p>{overview}</p>
      </TableWrapper>
    </Wrapper>
  );
};
export default MovieCard;
