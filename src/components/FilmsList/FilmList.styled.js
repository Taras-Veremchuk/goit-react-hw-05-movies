import styled from '@emotion/styled';

export const Container = styled.div`
   max-width: 1280px,
        padding-left: 32px,
    padding-right: 32px,
        margin-left: auto;
    margin-right: auto;
`;
export const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  list-style: none;
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

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  border-right: 1px solid #eeeeee;
  border-left: 1px solid #eeeeee;
  transform: scale(1);
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    transform: scale(1.03);
  }
  @media (min-width: 768px) {
    flex-basis: calc((100% - 70px) / 3);
  }
  @media (min-width: 1280px) {
    flex-basis: calc((100% - 58px) / 4);
  }
`;
export const Img = styled.img`
  object-fit: cover;
  height: 398px;
  width: 100%;
  @media (min-width: 768px) {
    height: 320px;
  }
  @media (min-width: 1280px) {
    height: 360px;
  }
`;

export const Title = styled.p`
  min-height: 50px;
  margin-top: 10px;
  font-size: 20px;
  text-align: center;
  color: black;

  line-height: 1.33;
  text-transform: uppercase;
  color: black;
  text-decoration: none;
`;
