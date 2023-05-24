import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Main = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  @media (max-width: 767px) {
    max-width: 480px;
  }
  @media (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
    margin: 0 auto;
  }
`;

export const Header = styled.header`
  position: relative;
  border-bottom: 2px solid orangered;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  height: 6em;
  padding: 8px 0;
  margin-bottom: 16px;
`;
export const Link = styled(NavLink)`
  color: black;
  font-size: 22px;
  text-decoration: none;
  font-weight: 500;
  &.active {
    color: orangered;
  }
`;
