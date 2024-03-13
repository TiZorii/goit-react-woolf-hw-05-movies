import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: #0d253f;
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px;
`;

export const Link = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: #fff;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -7px;
    width: 100%;
    height: 1px;
    background-color: #fff;
  }
  &:hover {
    color: #01b4e4;
    &::after {
      background-color: #01b4e4;
    }
  }
`;
