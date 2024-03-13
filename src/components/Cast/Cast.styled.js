import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
`;
export const ListItem = styled.li`
  margin: 15px;
  flex-basis: calc((100% - 10 * 15px) / 5);
`;
export const Name = styled.p`
  font-weight: 700;
  margin-top: 5px;
`;
export const Img = styled.img`
  min-height: 192px;
`;
