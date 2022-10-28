import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.default = {
  onSubmit: null,
};

function TodoForm({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleValueChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!onSubmit) return;

    const formValues = {
      title: value,
    };

    onSubmit(formValues);

    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleValueChange} />
    </form>
  );
}

export default TodoForm;
