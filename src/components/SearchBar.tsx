import React from "react";
import SearchIcon from "../assets/img/Search.svg";
import Image from "next/image";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <form className="searchBarContainer">
      <input type="text" placeholder="Search accounts and videos" />
      <div className="divider"></div>
      <button className="searchButton">
        <Image src={SearchIcon} alt="search" />
      </button>
    </form>
  );
};

export default SearchBar;
