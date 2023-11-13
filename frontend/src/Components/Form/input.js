import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <label>
        Enter something:
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type here"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
