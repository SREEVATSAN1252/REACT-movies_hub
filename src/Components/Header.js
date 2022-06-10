import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    
      <div className="header" onClick={()=>window.scroll(0,0)}> 
        <span  className=" header">🎬 🎞 🍿 MOVIES HUB 🍿 🎞 🎬</span>
      </div>
    
  );
};

export default Header;
