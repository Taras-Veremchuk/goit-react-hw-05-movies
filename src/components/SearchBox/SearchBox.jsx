import { Form, Btn, Input } from './SearchBox.styled';
import { ReactComponent as SearchIcon } from '../icons/search.svg';
import { useState } from 'react';

// import { useSearchParams } from 'react-router-dom';

const SearchBox = ({ onSubmit }) => {
  const [value, setValue] = useState('');

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
    onSubmit(value);
    setValue('');
  };
  // == Return ==
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Btn type="submit">
          <SearchIcon />
        </Btn>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={value}
          onChange={e => handleInputChange(e)}
        />
      </Form>
    </div>
  );
};
export default SearchBox;
