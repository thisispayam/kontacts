import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Logo from '../../../assets/logo.png';
import './Navbar.scss';

const Navbar = ({title, icon}) => {
    return (
        <div className='navbar bg-light'>
            <img className="logo" src={Logo} alt='logo' />
            <h1>       
                {title}
                {/* <i className={icon}>{title}</i> */}  
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired, //ptsi
    icon: PropTypes.string
}

Navbar.defaultProps = {
    title: 'ontacts',
    icon: 'fas fa-id-card-alt'
}
export default Navbar