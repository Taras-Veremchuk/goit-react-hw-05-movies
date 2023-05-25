import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Link = styled(NavLink)`
  color: black;
  font-size: 22px;
  text-decoration: none;
  font-weight: 500;
  &.active {
    color: orangered;
  }
`;

export const Container = styled.div`
  display: flex;
`;
export const Img = styled.img`
  width: 300px;
  margin-right: 10px;
`;
export const Title = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.33;
  margin-bottom: 10px;
`;
export const Button = styled.button`
  background-color: orangered;
  color: white;
  border: 2px solid orangered;
  padding: 0;
  text-align: center;
  text-transform: uppercase;
  border-radius: 4px;
  height: 32px;
  padding: 8px 16px;
  margin: 10px;
  font-weight: 500;
  line-height: 1.33;
  font-size: 14px;
`;

export const H3 = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.33;
  margin-bottom: 10px;
`;
export const AdInf = styled.div`
  text-align: center;
`;
export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.33;
  margin-bottom: 10px;
`;

export const UL = styled.ul`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 20px;
`;
export const LI = styled.li`
border: 1px solid red
  font-weight: 400;
  font-size: 16px;
  line-height: 1.33;
  margin-bottom: 10px;
`;
