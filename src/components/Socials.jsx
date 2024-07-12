import React from "react";
import dex from "/workspaces/chicken-head/src/pictures/dex.png";
import x from "/workspaces/chicken-head/src/pictures/x.png";
import git from "/workspaces/chicken-head/src/pictures/git.png";
import tg from "/workspaces/chicken-head/src/pictures/tg.png";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "/workspaces/chicken-head/src/App.css";

function Socials() {
  return (
    <div className="container text-center py-4">
      <div className="row justify-content-center align-items-center">
        <div className="col-auto">
          <a href="dex.com" target="_blank" rel="noopener noreferrer">
            <img className="dex" src={dex} alt="Dex" />
          </a>
        </div>
        <div className="col-auto">
          <a href="x.com" target="_blank" rel="noopener noreferrer">
            <img className="x" src={x} alt="X" />
          </a>
        </div>
        <div className="col-auto">
          <a href="https://github.com/razorheadtwofour/chicken-head" target="_blank" rel="noopener noreferrer">
            <img className="git" src={git} alt="Git" />
          </a>
        </div>
        <div className="col-auto">
          <a href="telegram.com" target="_blank" rel="noopener noreferrer">
            <img className="tg" src={tg} alt="Tg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Socials;
