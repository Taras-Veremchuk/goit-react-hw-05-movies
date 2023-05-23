import { Wrapper, Form, Btn, Input } from './SearchBox.styled';
import { ReactComponent as SearchIcon } from '../icons/search.svg';
import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchBox = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  // ---- ВИКОРИСТОВУЮ ХУК ЮССЬОРЧПАРАМС ----
  // ---- setSearchParams ПЕРЕЗАПИСУЄ РЯДОК ПАРАМЕТРІВ ЗАПИТУ ----
  // ---- searchParams ЩОБ ПОЛУЧИТИ ЗНАЧЕННЯ QUERY STRING ПАРАМЕТРІВ (МЕТОД get())----
  const [searchParams, setSearchParams] = useSearchParams();
  // const params = useMemo(
  //   () => Object.fromEntries([...searchParams]),
  //   [searchParams]
  // );

  // == Input change ==
  const handleInputChange = event => {
    const inputValue = event.currentTarget.value.toLowerCase();
    setValue(inputValue);
  };
  // == Form Submit ==
  const handleSubmit = event => {
    event.preventDefault();
    if (value.trim() === '') {
      alert('Please write something');
      return;
    }
    //---- ЗМІНЮЮ  QUERY STRING- КЛАДУ ОБЄКТ ПАРАМЕТРІВ ПРИ ПОДІІ SUBMIT----
    const nextParams = value !== '' ? { query: value } : {};
    setSearchParams(nextParams);
    onSubmit(value);
    setValue('');
  };
  // == Return ==
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Btn type="submit">
          <SearchIcon />
        </Btn>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
          value={value}
          onChange={e => handleInputChange(e)}
        />
      </Form>
    </Wrapper>
  );
};
export default SearchBox;
