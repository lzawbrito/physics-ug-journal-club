import React from "react";
import { Link, NavLink } from "react-router-dom";
import { pages } from "./Nav";

export default class MobileSideNav extends React.Component {
    
    render() {
        function getLink(page, closeNav) {
            return <span>
                <Link to={page.link} onClick={closeNav} className="mobileNavUnselected" exact={true} >
                    {page.name}
                </Link> 
            </span>
        }
	
		const links = pages.map((elem) => getLink(elem, this.props.closeNav));
		return <div className="mobileSideNav" style={{width: this.props.width}}>
				<a className="mobileNavUnselected" onClick={this.props.closeNav} style={{cursor:`pointer`, paddingBottom: '10px'}}>(X)</a>
                {links}
			</div>
	}
}