import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchForm = ({ addAPIResponse }) => {
  const [value, setValue] = useState("");

  const fetchData = async () => {
    const results = await axios(
      `http://hn.algolia.com/api/v1/search?query=${value}`
    );

    await addAPIResponse(results.data);
  };

  useEffect(
    () => {
      fetchData();
    },
    [value]
  );

  return (
    <form>
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
