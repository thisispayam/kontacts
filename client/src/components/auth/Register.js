import React,{useState} from 'react'
import './Auth.scss';

const Register = () => {
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
            console.log(e, 'register submit');
        }
    return (
        <div className='form-container register'>
            <h3>
                Account <span className="text-primary">Register</span>
            </h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" name="text" placeholder='Name' value={name} onChange={onChange} />
                </div>
                <div className="form-group">
                    <input type="email" name="email" placeholder='Email' value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <input type="password" name="password" placeholder='Password' value={password} onChange={onChange} />
                </div>
                <div className="form-group">
                    <input type="password" name="password2" placeholder='Password' value={password} onChange={onChange} />
                </div>
                <input type="submit" value="register" className="btn btn-primary btn-block round-btn"/>
            </form>
        </div>
    )
}

export default Register
