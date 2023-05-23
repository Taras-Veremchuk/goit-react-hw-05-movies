import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  gap: 16px;
`;
export const List = styled.ul`
  gap: 20px;
  flex-wrap: wrap;
  display: flex;
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
  @media screen and (min-width: 1280px) {
    gap: 16px;
  }

  flex-basis: calc((100% - (1 - 1) * 20px) / 1);
`;
export const Link = styled(NavLink)`
  color: black;
  font-size: 22px;
  text-decoration: none;
  font-weight: 500;
`;
