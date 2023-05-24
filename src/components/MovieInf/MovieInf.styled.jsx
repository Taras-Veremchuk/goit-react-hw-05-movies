import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  ${
    '' /* gap: 15px,
    max-width: 1280px,
        padding-left: 32px,
    padding-right: 32px,
        margin-left: auto;
    margin-right: auto; */
  }
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
  margin-bottom: 10px;
`;
