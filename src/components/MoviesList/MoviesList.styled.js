import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieCardLink = styled(Link)`
  text-decoration: none;
`;

export const Movielist = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: -10px;
  padding: 20px;
`;
export const ListItem = styled.li`
  margin: 10px;
  // width: 150px;
  flex-basis: calc((100% - 10 * 15px) / 5);
  padding: 5px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const MovieTitle = styled.p`
  font-weight: 700;
  color: #000;
  margin-bottom: 5px;
  padding: 5px;
`;

export const MovieImage = styled.img`
  width: 100%;
  display: block;

  object-fit: contain;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
