import React, { useContext } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Switch from "react-js-switch";
import ContextAPI from "../../context";

function NavBar() {
  const { isLogin, AuthUser } = useContext(ContextAPI);

  return (
    <>
      <nav className="topNav">
        <div className="toogleSwitch">
          <Switch value={isLogin} onChange={AuthUser} />
        </div>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/fqa">FQA</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </>
  );
}

export default NavBar;
