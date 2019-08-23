import React,{useState} from 'react'
import './Auth.scss';

const Login = () => {
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
            console.log(e, 'login submit');
        }
    return (
        <div className='form-container register'>
            <h3>
                Account <span className="text-primary">Login</span>
            </h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="email" name="email" placeholder='Email' value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <input type="password" name="password" placeholder='Password' value={password} onChange={onChange} />
                </div>
               
                <input type="submit" value="login" className="btn btn-primary btn-block round-btn"/>
            </form>
        </div>
    )
}

export default Login;
