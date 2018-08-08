import React, { Component } from 'react';

const SearchResults = ({ results }) => {
  return results.map((item, idx) => <div>{item}</div>);
};
const Search = () => (
  <SearchResults results={['one', 'two']} />
);

export default Search;
