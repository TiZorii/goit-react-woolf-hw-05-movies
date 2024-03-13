import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import Notiflix from 'notiflix';
import {
  ListItem,
  Author,
  DateTime,
  ReviewItem,
  ReviewList,
  NoReviewsWrap,
} from './MovieReviews.styled';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  let { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId);
  }, [movieId]);

  const getMovieReviews = async movieId => {
    try {
      const reviews = await fetchMovieReviews(movieId);
      if (reviews.results.length === 0) {
        throw new Error();
      }
      setReviews(reviews.results);
    } catch (error) {
      console.log(error);
      Notiflix.Notify.failure('There are no reviews for this movie yet');
    }
  };

  return reviews.length === 0 ? (
    <NoReviewsWrap>
      <p>'There are no reviews for this movie yet'</p>
    </NoReviewsWrap>
  ) : (
    <ul>
      {reviews.map(({ author, content, created_at, id }) => {
        let date = created_at.substr(0, 10);
        let time = created_at.substr(11, 5);
        return (
          <ListItem key={id}>
            <ReviewList>
              <ReviewItem>
                <Author>{author}</Author>
              </ReviewItem>
              <ReviewItem>
                Date: <DateTime>{date}</DateTime>
              </ReviewItem>
              <ReviewItem>
                Time: <DateTime>{time}</DateTime>
              </ReviewItem>
            </ReviewList>
            <div>
              <p>{content}</p>
            </div>
          </ListItem>
        );
      })}
    </ul>
  );
};
export default MovieReviews;
