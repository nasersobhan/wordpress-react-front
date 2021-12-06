
import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
<div className="container box_1620">
    <a className=" logo_h" href="/">Naser Sobhan Blog</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
    </button>
    <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
        <ul className="nav navbar-nav menu_nav ml-auto">
            <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li> 
            <li className="nav-item"><Link className="nav-link" to="/about-me">About</Link></li> 
            <li className="nav-item"><Link className="nav-link" to="/who-are-my-clients">Who Are My Clients</Link></li> 
            <li className="nav-item"><Link className="nav-link" to="/category/projects/">Recent Projects</Link></li> 
            <li className="nav-item submenu dropdown">
                <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Categories</a>
                <ul className="dropdown-menu">
                    <li className="nav-item"><a className="nav-link" href="portfolio.html">Portfolio</a></li>
                    <li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
                </ul>
            </li> 
            
            <li className="nav-item"><Link className="nav-link" to="/contact-me-for-hiring">Contact</Link></li>
        </ul>
    </div> 
</div>
</nav>
    )
}

export default Menu

