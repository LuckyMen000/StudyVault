import React, { useState } from 'react';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const InputForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted value:', inputValue);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '230px', marginLeft: '20px' }}>
      <InputGroup size="sm">
        <Input
          variant='outline'
          placeholder='Search'
          value={inputValue}
          onChange={handleInputChange}
          size="sm"
          style={{ borderRadius: '20px' }} 
        />
        <InputRightElement>
          <FaSearch />
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default InputForm;
