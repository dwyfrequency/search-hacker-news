import React, { useState, useEffect } from "react";
import { async } from "q";
import axios from "axios";

const SearchForm = ({ addAPIResponse }) => {
  const [value, setValue] = useState("");
  const [data, setData] = useState({ hits: [] });

  const fetchData = async () => {
    const results = await axios(
      `http://hn.algolia.com/api/v1/search?query=${value}`
    );

    await setData(results.data);
    addAPIResponse(data);
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
