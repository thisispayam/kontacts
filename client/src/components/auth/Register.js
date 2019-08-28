import React, { useState, useContext} from 'react'
import AlertContext from '../../context/alert/alertContext';

import './Auth.scss';

const Register = () => {
    const alertContext = useContext(AlertContext);

    const { setAlert } = alertContext;

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2:''
    })
    const { name, email, password, password2 } = user;
 
    const onChange = e => setUser(
        {...user, [e.target.name]: e.target.value}
    )
        const onSubmit = e => {
            e.preventDefault();
            if(name === '' || email === '' || password === '') {
                setAlert('Please enter all fields', 'danger');
            } else if (password !== password2) {
                setAlert('Passwords do not match', 'danger');
            } else {
                console.log(e, 'register submit');
            }
        }
    return (
        <div className='form-container register'>
            <h3>
                Account <span className="text-primary">Register</span>
            </h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" name="name" placeholder='Name' value={name} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <input type="email" name="email" placeholder='Email' value={email} onChange={onChange} required/>
                </div>
                <div className="form-group">
                    <input type="password" name="password" placeholder='Password' value={password} minLength="6" onChange={onChange} required />
                </div>
                <div className="form-group">
                    <input type="password" name="password2" placeholder='Confirm Password' value={password2} minLength="6" onChange={onChange} required />
                </div>
                <input type="submit" value="register" className="btn btn-primary btn-block round-btn"/>
            </form>
        </div>
    )
}

export default Register
