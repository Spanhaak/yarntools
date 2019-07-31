import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../img/logowhite.png';
import LogoTab from '../img/tab.png';


const Navbar = ({ title, tab}) => {
    return (
        <div className="navbar bg-primary">
            <h1 className="vCenterItems">
                <img src={Logo} width="60px" height="60px" alt="" /><img src={LogoTab} width="30px" height="30px" alt="" /> {tab} {title}
            </h1>

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