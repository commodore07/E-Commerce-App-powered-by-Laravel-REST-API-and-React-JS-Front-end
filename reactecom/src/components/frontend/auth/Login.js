import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import {Link, useNavigate} from 'react-router-dom';

const Login = () => {

const history = useNavigate();
const [loginInput, setLogin] = useState({
    email: '',
    password: '',
    error_list: [],
});

const handleInput = (e) => {
    e.persist();
    setLogin({...loginInput, [e.target.name]: e.target.value });
}

const loginSubmit = (e) => {
  e.preventDefault();
  
  const data = {
      email: loginInput.email,
      password: loginInput.password,
  }

  axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`api/login`, data).then(res => {
          if(res.data.status === 200)
          {
              localStorage.setItem('auth_token', res.data.token);
              localStorage.setItem('auth_name', res.data.username);
              swal("Success",res.data.message,"success");
              if(res.data.role === 'admin')
              {
                  history('/admin');
              }
              else
              {
                  history('/');
              }
          }
          else if(res.data.status === 401)
          {
              swal("Warning",res.data.message,"warning");
          }
          else
          {
              setLogin({...loginInput, error_list: res.data.validation_errors });
          }
      });
  });

}

  return (
    <div className="auth-wrapper d-flex no-block justify-content-center align-items-center position-relative"
    style={{backgroundImage: 'url(../assets/images/big/auth-bg.jpg)'}}>
            <div className="auth-box row">
                <div className="col-lg-7 col-md-5 modal-bg-img" style={{backgroundImage: 'url(../assets/images/big/3.jpg)'}}>
                </div>
                <div className="col-lg-5 col-md-7 bg-white">
                    <div className="p-3">
                        <div className="text-center">
                            <img src="../assets/images/big/icon.png" alt="wrapkit" />
                        </div>
                        <h2 className="mt-3 text-center">Sign In</h2>
                        <p className="text-center">Enter your email address and password to access admin panel.</p>
                        <form onSubmit={loginSubmit} className="mt-4">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="text-dark" for="uname">Username</label>
                                        <input className="form-control" name="email" onChange={handleInput} value={loginInput.email} id="uname" type="text"
                                            placeholder="enter your username" />
                                            <span>{loginInput.error_list.email}</span>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="text-dark" for="pwd">Password</label>
                                        <input className="form-control" name="password" onChange={handleInput} value={loginInput.password} id="pwd" type="password"
                                            placeholder="enter your password" />
                                            <span>{loginInput.error_list.password}</span>
                                    </div>
                                </div>
                                <div className="col-lg-12 text-center">
                                    <button type="submit" className="btn btn-block btn-dark">Sign In</button>
                                </div>
                                <div className="col-lg-12 text-center mt-5">
                                    Don't have an account? <Link to="/register" className="text-danger">Sign Up</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login