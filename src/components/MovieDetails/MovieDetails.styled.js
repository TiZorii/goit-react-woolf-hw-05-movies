import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Wrapper = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;
export const InfoTitle = styled.span`
  display: block;
  margin-bottom: 10px;
`;
export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const GoToLink = styled(NavLink)`
  text-decoration: none;
`;
export const GoBackLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  width: 150px;
  border: 1px solid #212121;
  border-radius: 5px;
  padding: 5px 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  &:hover {
    border-color: #4490da;
    background-color: #4490da;
    color: #fff;
  }
`;
