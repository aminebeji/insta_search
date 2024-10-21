import React from "react";

function Navbar({ value }) {
  var homePage = () => {};
  return (
    <div onClick={homePage} className="navbar_container">
      <img
        src={require("./../../assets/insta_logo.png")}
        alt="intagram logo"
        width={150}
      />
      {value || "Search For an instagram influencer"}
      <a
        className="ds_flex"
        href="https://github.com/aminebeji/insta_search"
        target="_blank"
      >
        <h4>Instagram Search</h4>
        <img src={require("./../../assets/github_logo.png")} width={25} />
      </a>
    </div>
  );
}

export default Navbar;
