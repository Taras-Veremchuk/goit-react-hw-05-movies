import styled from '@emotion/styled';
// export const Wrapper = styled.div`
//   display: block;
//   width: 50%;
//   margin-left: auto;
//   margin-right: auto;
//   align-items: center;
//   margin-bottom: 16px;
//   text-transform: uppercase;
// `;
export const Form = styled.form`
  display: flex;
  ${'' /* align-items: center; */}
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
  background-color: #fff;
  overflow: hidden;
  padding-top: 10px;
  ${'' /* padding-left: 10px; */}
  ${
    '' /* display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border: 1px solid tomato
  border-radius: 3px; */
  }
  ${'' /* overflow: hidden; */}
`;

export const Btn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;

  border-radius: 5px;
  opacity: 0.8;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    border: 2px solid orangered;
    opacity: 1;
  }
`;
export const Input = styled.input`
  display: inline-block;
  height: 44px;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  border: 1px solid black;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
  ${
    '' /* display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20;
  border: none;
  outline: none;
  padding-left: 4;
  padding-right: 4;
  ::placeholder {
    font: inherit;
    font-size: 18;
  } */
  }
`;
