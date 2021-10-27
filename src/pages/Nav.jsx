import React from "react";
import { Link, NavLink } from "react-router-dom";

export const pages = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Notes/Slides",
        link: "/notes-slides"
    },
    {
        name: "Request a Topic",
        link: "/request"
    },
    {
        name: "About",
        link: "/about"
    },
]

function generateNavLink(item) {
    return <div className="navItem">
        <NavLink exact to={item.link} className="navUnselected" activeClassName="navSelected">
            {item.name}
        </NavLink>
    </div>
}

const navItems = pages.map(generateNavLink)

export default class Nav extends React.Component {
	render() {
        return <>
        <div className="sideNav">
            {navItems}
        </div>
        </>
	}
}