import React,{useState, useContext, useEffect, Fragment} from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

import Hero from '../Hero/Hero';
import './Auth.scss';

const Login = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/'); // directing to the homepage after log in
        }
        if (error === 'Invalid Credentials') {
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const { email, password } = user;
 
    const onChange = e => setUser(
        {...user, [e.target.name]: e.target.value}
    )
        const onSubmit = e => {
            e.preventDefault();
            if (email === '' || password === ''){
                setAlert('Please fill in all fields', 'danger');
            } else {
                login({
                    email,
                    password
                })
            }
        }
    return (
        <Fragment>
        <Hero />
        <div className='form-container register'>
            
            <h3>
                Account <span className="text-primary">Login</span>
            </h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="email" name="email" placeholder='Email' value={email} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <input type="password" name="password" placeholder='Password' value={password} onChange={onChange} required/>
                </div>
               
                <input type="submit" value="login" className="btn btn-primary btn-block round-btn"/>
            </form>
        </div>
        </Fragment>
    )
}

export default Login;
