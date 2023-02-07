import React, { useState } from "react";
import {
    FaUserAlt,
    FaBars,
    FaShopify
} from "react-icons/fa";
import {
    BsFillCartPlusFill
} from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Sidebar = ({children}) => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem = [
        {
            path: "/product",
            name: "All Products",
            icon: <FaShopify />
        },
        {
            path: "/add",
            name: "View Cart",
            icon: <BsFillCartPlusFill />
        },
        {
            path: "/about",
            name: "About",
            icon: <FaUserAlt />
        }
    ]
    return (
        <div className="container">
            <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
                <div className="top_section">
                  <div style={{marginLeft: isOpen ? "5" : "0px"}} className="bars">
                    <FaBars onClick={toggle} /> &nbsp; &nbsp; <p>GoShop</p>
                  </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
}

export default Sidebar;