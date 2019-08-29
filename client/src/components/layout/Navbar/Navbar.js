import React, { Fragment, useContext} from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import AuthContext from '../../../context/auth/authContext';

import Logo from '../../../assets/logo.png';
import './Navbar.scss';

const Navbar = ({title, icon}) => {
    const authContext = useContext(AuthContext);

    const { isAuthenticated, logout, user } = authContext;

    const onLogout = () => {
        logout();
    }
    const authlinks = (
        <Fragment>
            <li className='welcome'>Hello {user && user.name}</li>
            <li className='logout'>
                <a onClick={onLogout} href="#!">
                    <i className="fas fa-sign-out-alt"></i><span className="hid-sm">Logout</span>
                </a>
            </li>
        </Fragment>
    );

    const guestlinks = (
        <Fragment>
            <li className='register'>
                <Link to='/register'>Register</Link>
            </li>
            <li className='login'>
                <Link to='/login'>Login</Link>
            </li>
        </Fragment>
    );
    return (
        <div className='navbar bg-light'>
            <Link to='/'><img className="logo" src={Logo} alt='logo' />
            <h1>       
                {title}
                {/* <i className={icon}>{title}</i> */}  
            </h1>
            </Link>
            <ul>
                {isAuthenticated ? authlinks : guestlinks}  
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
