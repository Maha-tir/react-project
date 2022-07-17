import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/search.css";
const Search = ({ className, onSearch }) => {
  const [search, setSearch] = useState("");
  const dataSearch = [
    { id: 1, name: "BTC/USDT", path: "/user/details/coin/:id" },
    { id: 2, name: "ALGO/USDT", path: "/user/details/coin/:id" },
    { id: 3, name: "ALICE/USDT", path: "/user/details/coin/:id" },
    { id: 4, name: "ADA/USDT", path: "/user/details/coin/:id" },
  ];

  return (
    <div
      className={`search-wrapper ${className}`}
      style={{
        transition:
          "min-height 0.4s, height 0.4s, opacity 0.4s, visibility 0.4s",
      }}
    >
      <div className="search-header">
        <div className="search-box">
          <i className="fa-brands fa-sistrix btn-search"></i>
          <input
            type="text"
            className="search-input"
            placeholder="Search coin..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button className="cancel-btn fz:13 text-dark" onClick={onSearch}>
            Cancel
          </button>
        </div>
      </div>
      <div
        className="search-list"
        style={{
          transition: "min-height 0.4s, height 0.4s",
        }}
      >
        {dataSearch
          .filter((val) => {
            if (search == "") {
              return val;
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((item, index) => (
            <Link to={item.path} className="search-link" key={index}>
              <i className="bx bx-file-blank"></i>
              <h2 className="m-0 fz:14 fw-500">{item.name}</h2>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Search;
