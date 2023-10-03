import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import {Link, useNavigate} from 'react-router-dom';

const Register = () => {

  const history = useNavigate();
  const [registerInput, setRegister] = useState({
      name: '',
      email: '',
      password: '',
      error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setRegister({...registerInput, [e.target.name]: e.target.value });
  }

  const registerSubmit = (e) => {
    e.preventDefault();
    
    const data = {
        name: registerInput.name,
        email: registerInput.email,
        password: registerInput.password,
    }

    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`/api/register`, data).then(res => { 
          if(res.data.status === 200)
          {
              localStorage.setItem('auth_token', res.data.token);
              localStorage.setItem('auth_name', res.data.username);
              swal("Success",res.data.message,"success");
              history('/');
          }
          else
          {
              setRegister({...registerInput, error_list: res.data.validation_errors});
          }
      });
  });
    
}

  return (
    <div className="auth-wrapper d-flex no-block justify-content-center align-items-center position-relative"
            >
            <div className="auth-box row text-center">
                <div className="col-lg-7 col-md-5 modal-bg-img" style={{backgroundImage: 'url(../assets/images/big/3.jpg)'}}>
                </div>
                <div className="col-lg-5 col-md-7 bg-white">
                    <div className="p-3">
                        <img src="../assets/images/big/icon.png" alt="wrapkit" />
                        <h2 className="mt-3 text-center">Sign Up for Free</h2>
                        <form onSubmit={registerSubmit} className="mt-4">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="name" onChange={handleInput} value={registerInput.name} placeholder="your name" />
                                        <span>{registerInput.error_list.name}</span>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-control" type="email" name="email" onChange={handleInput} value={registerInput.email} placeholder="email address" />
                                        <span>{registerInput.error_list.email}</span>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-control" type="password" name="password" onChange={handleInput} value={registerInput.password} placeholder="password" />
                                        <span>{registerInput.error_list.password}</span>
                                    </div>
                                </div>
                                <div className="col-lg-12 text-center">
                                    <button type="submit" className="btn btn-block btn-dark">Sign Up</button>
                                </div>
                                <div className="col-lg-12 text-center mt-5">
                                    Already have an account? <Link to="/login" className="text-danger">Sign In</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Register