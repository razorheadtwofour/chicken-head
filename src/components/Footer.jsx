import React from "react";
import dex from "/workspaces/chicken-head/src/pictures/dex.png";
import x from "/workspaces/chicken-head/src/pictures/x.png";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import "/workspaces/chicken-head/src/App.css"

function Footer() {
  return (
    <div className="container text-center py-4">
      <div className="row justify-content-center align-items-center">
        <div className="col-auto">
          <img className="dex" src={dex} alt="Dex" />
        </div>
        <div className="col-auto">
          <img className="x" src={x} alt="X" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
