import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <section className="search-container">
      <div className="container-inner">
        <h1 className="search-title">How can we help?</h1>
        <form>
          <input className="search-box" type="text" placeholder="Search" />
        </form>
      </div>
    </section>
  );
};

export default Search;
