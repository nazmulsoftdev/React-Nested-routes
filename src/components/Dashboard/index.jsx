import React, { useState, useContext } from "react";
import "./index.css";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineAlignLeft as NavIcon } from "react-icons/ai";
import ContextAPI from "../../context";

function Dashboard() {
  const [expand, setExpand] = useState(true);

  const BigNav = {
    width: "15%",
  };
  const smallNav = {
    width: "10%",
  };

  const smallContent = {
    width: "85%",
    marginLeft: "15%",
  };

  const BigContent = {
    width: "90%",
    marginLeft: "10%",
  };

  const NavExpand = () => {
    setExpand(!expand);
  };

  // context

  const { AuthUser } = useContext(ContextAPI);

  return (
    <>
      <nav className={`dashboardNav`} style={expand ? BigNav : smallNav}>
        <NavIcon
          onClick={NavExpand}
          className="NavIcon"
          size={expand ? 30 : 20}
        />
        <Link to="store">Store</Link>
        <Link to="addpost">Add Post</Link>
        <Link to="editpost">Edit Post</Link>
        <Link to="deletepost">Delete Post</Link>
        <button onClick={AuthUser}>Logout</button>
      </nav>
      <div
        className="dashboard-content"
        style={expand ? smallContent : BigContent}
      >
        <Outlet />
      </div>
    </>
  );
}

export default Dashboard;
