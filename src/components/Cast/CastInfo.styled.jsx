import styled from '@emotion/styled';
export const Text = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.33;
`;
export const Ul = styled.ul`
  display: -webkit-inline-box;
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
  flex-wrap: wrap;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex-basis: calc((100% - 69px) / 4);
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
    flex-basis: calc((100% - 172px) / 6);
  }
  @media (min-width: 1280px) {
    flex-basis: calc((100% - 165px) / 10);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
