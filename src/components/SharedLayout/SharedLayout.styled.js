import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  min-width: 100%;
  background-color: #white;
  border-bottom: 1px solid black;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px;
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
