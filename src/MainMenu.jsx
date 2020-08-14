import React from 'react';
// import HomeIcon from 'react-icons/lib//fa/home';
import { NavLink } from 'react-router-dom';
import './stylesheets/MainMenu.css';

const SelectedStyle = {
    backgroundColor: "white",
    color: "slategray"
}

export const MainMenu = () =>
    <nav className="main-menu">
        <NavLink to="/">
            {/* <HomeIcon /> */}
            Home
        </NavLink>
        <NavLink to="/about" activeStyle={SelectedStyle}>
            About
        </NavLink>
        <NavLink to="/events" activeStyle={SelectedStyle}>
            Events
        </NavLink>
        <NavLink to="/products" activeStyle={SelectedStyle}>
            Products
        </NavLink>
        <NavLink to="/contact" activeStyle={SelectedStyle}>
            Contact Us
        </NavLink>
    </nav>

export const AboutMenu = ({ match }) =>
    <div className="about-menu">
        <li>
            <NavLink to="/about" style={match.isExact && SelectedStyle}>
                Company
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/history" activeStyle={SelectedStyle}>
                History
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/services" activeStyle={SelectedStyle}>
                Services
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/location" activeStyle={SelectedStyle}>
                Location
            </NavLink>
        </li>
    </div>