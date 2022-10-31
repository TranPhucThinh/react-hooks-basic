import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useRef } from 'react';

PostFiltersForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
  onSubmit: null,
};

function PostFiltersForm({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');

  const typingTimeoutRef = useRef(null);

  const handleSearchTermChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };

      onSubmit(formValues);
    }, 300);
  };

  return (
    <form>
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
    </form>
  );
}

export default PostFiltersForm;

// Note:
// after onChange => execute func handleSearchTermChange.
// Then execute func setSearchTerm but searchTerm is not update yet, object formValues will be update => searchTerm = new value and func onSubmit pass formValues to App.js. After handleSearchTermChange()is executed,  searchTerm will be updated
