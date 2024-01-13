import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./topfold.css";
function Topfold() {
  const [query, setquery] = useState("");
  const handlequery = (e) => {
    setquery(e.target.value);
  };
  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="search-bar">
            <input
              placeholder="search-for-expenser"
              onChange={(e) => handlequery(e)}
            ></input>
          </div>
          <Link to="/add-expense">
            <div className="add-btn">
              <label>Add</label>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold">
          <Link to="/">
            <div className="back-btn">
              <lable>BACK</lable>
            </div>
          </Link>
          <div className="cancel-btn">
            <label>Cancel</label>
          </div>
        </div>
      )}
    </div>
  );
}

export default Topfold;
