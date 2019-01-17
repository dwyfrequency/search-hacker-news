import React, { useState } from "react";

const SearchForm = ({ addSearchValue }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addSearchValue(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Search Stories by title, url or author"
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
