import styled from 'styled-components';

export const ListItem = styled.li`
  border-bottom: 1px solid black;
  padding: 5px;
  background: #fff;
  margin-top: 20px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const ReviewList = styled.ul`
  margin-bottom: 20px;
`;
export const ReviewItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const Author = styled.span`
  font-weight: 700;
`;
export const DateTime = styled.span`
  font-weight: 500;
`;
export const NoReviewsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  border: 1px solid #212121;
  border-radius: 5px;
  padding: 30px 0;
  margin-top: 20px;
  margin-bottom: 20px;
`;
