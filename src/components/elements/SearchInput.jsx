import React, { useState } from "react";
import { search_profile } from "./../../services/APICalls";
import { Input } from "antd";

function SearchInput({ setQuery, setValue, value }) {
  // Trigger the API call on search (you can also use onChange for different behavior)
  const handleSearch = (e) => {
    console.log("🚀 ~ handleSearch ~ value=>", e.target?.value);
    setValue(e.target.value);
    if (!e.target.value.length) return setQuery([])
    try {
      var result = search_profile(e.target?.value);
      if (result.length) setQuery(result);
      else setQuery([]);
      console.log("🚀 ~ fetchOptions ~ result=>", result);
    } catch (error) {
      console.error("Error fetching options:", error);
    }
  };

  return (
    <Input
      placeholder="Search for an instagram influencer"
      onChange={handleSearch}
      style={{ width: 450 }}
    ></Input>
  );
}

export default SearchInput;
