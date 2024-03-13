import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import { List, ListItem, Name, Img } from './Cast.styled';

const NO_IMAGE =
  'https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png';

export default function Cast() {
  const [cast, setCast] = useState([]);
  let params = useParams();

  useEffect(() => {
    async function getMovieCast() {
      try {
        const { cast } = await fetchMovieCast(params.movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    }

    getMovieCast(params.movieId);
  }, [params.movieId]);
  return (
    <List>
      {cast.map(({ original_name, character, profile_path, cast_id }) => {
        return (
          <ListItem key={cast_id}>
            <Img
              src={
                profile_path === null
                  ? `${NO_IMAGE}`
                  : `https://image.tmdb.org/t/p/w300/${profile_path}`
              }
              alt={original_name}
              width="150"
            />
            <Name>{original_name}</Name>
            <p>{character}</p>
          </ListItem>
        );
      })}
    </List>
  );
}
