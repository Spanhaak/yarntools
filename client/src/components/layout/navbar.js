import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../img/logowhite.png';
import LogoTab from '../img/tab.png';
import { Link } from 'react-router-dom';


const Navbar = ({ title, tab}) => {
    return (
        <div className="navbar bg-primary">
            <h1 className="vCenterItems">
                <img src={Logo} width="60px" height="60px" alt="" /><img src={LogoTab} width="20px" height="20px" alt="" /> {tab} {title}
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/tools'>Tools</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>

        </div>
    )

};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    tab: PropTypes.string
};

Navbar.defaultProps = {
    title: 'Yarntools',
    icon: '',
    tab: ' '
};


export default Navbar