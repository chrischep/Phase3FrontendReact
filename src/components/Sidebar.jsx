import React, { useState } from "react";
import {NavLink} from "react-router-dom"
import {FaTh,FaBars,FaCommentAlt,FaShoppingBag,FaThList,FaUserAlt} from "react-icons/fa"

const Sidebar = ({children}) => {
  const[isOpen,setIsOpen]=useState(false)
  const toggle=()=>setIsOpen(!isOpen)

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/customer",
      name: "Customer",
      icon: <FaUserAlt />,
    },
    {
      path: "/review",
      name: "Review",
      icon: <FaCommentAlt />,
    },
    {
      path: "/dog",
      name: "Dog",
      icon: <FaShoppingBag />,
    },
    {
      path: "/dogList",
      name: "Dog List",
      icon: <FaThList />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            DogINN
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
