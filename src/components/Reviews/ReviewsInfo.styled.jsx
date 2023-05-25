import styled from '@emotion/styled';
export const Text = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.33;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  @media (min-width: 768px) {
    gap: 32px;
    padding-top: 28px;
    padding-bottom: 28px;
  }
  @media (min-width: 1280px) {
    gap: 16px;
    padding-top: 28px;
    padding-bottom: 28px;
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-self: baseline;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
`;

export const Author = styled.p`
  font-weight: 400;
  font-size: 18px;
  padding-bottom: 8px;
`;

export const Post = styled.p`
  font-weight: 400;
  font-size: 14px;
  text-align: justify;
`;
