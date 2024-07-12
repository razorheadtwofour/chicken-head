import React from "react";
import chickenrunning from '../pictures/running_chicken.gif';
import "/workspaces/chicken-head/src/App.css"


function Header() {
  return (
    <div>
      <img className="main-chicken" alt="" src = {chickenrunning} ></img>
    </div>
  );
}

export default Header;