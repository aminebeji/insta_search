import React, { useState } from "react";
import SearchInput from "../components/elements/SearchInput";
import UsersList from "../components/sections/UsersList";
import EmptyUsers from "../components/elements/EmptyUsers";

const HomePage = () => {
  var [query, setQuery] = useState([]);
  var [value, setValue] = useState(null);
  return (
    <div className="select_search">
      <SearchInput value={value} setValue={setValue} setQuery={setQuery} />
      <UsersList query={query} value={value} />
      {!query.length && <EmptyUsers value={value} />}
    </div>
  );
};

export default HomePage;
