import React from 'react';

import axios from 'axios';
import swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const history = useNavigate();
    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post(`/api/logout`).then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                swal("Success", res.data.message, "success");
                history('/');
            }
        });

    }

    var AuthButtons = '';
    if (!localStorage.getItem('auth_token')) {
        AuthButtons = (
            <React.Fragment>
                <Link to="/login" className="dropdown-item"><i data-feather="lock"
                    className="svg-icon mr-2 ml-1"></i>
                    Login</Link>
                <div className="dropdown-divider"></div>
                <Link to="/register" className="dropdown-item"><i data-feather="lock"
                    className="svg-icon mr-2 ml-1"></i>
                    Register</Link>
            </React.Fragment>

        );
    }
    else {
        AuthButtons = (
            <button onClick={logoutSubmit} type="button" className="dropdown-item"><i data-feather="power"
                className="svg-icon mr-2 ml-1"></i>
                Logout</button>
        );
    }

    return (
        <header className="topbar" data-navbarbg="skin6">
            <nav className="navbar top-navbar navbar-expand-md">
                <div className="navbar-header" data-logobg="skin6">

                    <Link className="nav-toggler waves-effect waves-light d-block d-md-none" to="#!"><i
                        className="ti-menu ti-close"></i></Link>



                    <div className="navbar-brand">

                        <Link to="index.html">
                            <b className="logo-icon">

                                <img src="../assets/images/logo-icon.png" alt="homepage" className="dark-logo" />

                                <img src="../assets/images/logo-icon.png" alt="homepage" className="light-logo" />
                            </b>

                            <span className="logo-text">

                                <img src="../assets/images/logo-text.png" alt="homepage" className="dark-logo" />

                                <img src="../assets/images/logo-light-text.png" className="light-logo" alt="homepage" />
                            </span>
                        </Link>
                    </div>


                    <Link className="topbartoggler d-block d-md-none waves-effect waves-light" to="#!"
                        data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i
                            className="ti-more"></i></Link>
                </div>

                <div className="navbar-collapse collapse" id="navbarSupportedContent">


                    <ul className="navbar-nav float-left mr-auto ml-3 pl-1">

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle pl-md-3 position-relative" to="#!"
                                id="bell" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <span><i data-feather="bell" className="svg-icon"></i></span>
                                <span className="badge badge-primary notify-no rounded-circle">5</span>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-left mailbox animated bounceInDown">
                                <ul className="list-style-none">
                                    <li>
                                        <div className="message-center notifications position-relative">

                                            <Link to="#!"
                                                className="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                <div className="btn btn-danger rounded-circle btn-circle"><i
                                                    data-feather="airplay" className="text-white"></i></div>
                                                <div className="w-75 d-inline-block v-middle pl-2">
                                                    <h6 className="message-title mb-0 mt-1">Luanch Admin</h6>
                                                    <span className="font-12 text-nowrap d-block text-muted">Just see
                                                        the my new
                                                        admin!</span>
                                                    <span className="font-12 text-nowrap d-block text-muted">9:30 AM</span>
                                                </div>
                                            </Link>

                                            <Link to="#!"
                                                className="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                <span className="btn btn-success text-white rounded-circle btn-circle"><i
                                                    data-feather="calendar" className="text-white"></i></span>
                                                <div className="w-75 d-inline-block v-middle pl-2">
                                                    <h6 className="message-title mb-0 mt-1">Event today</h6>
                                                    <span
                                                        className="font-12 text-nowrap d-block text-muted text-truncate">Just
                                                        a reminder that you have event</span>
                                                    <span className="font-12 text-nowrap d-block text-muted">9:10 AM</span>
                                                </div>
                                            </Link>

                                            <Link to="#!"
                                                className="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                <span className="btn btn-info rounded-circle btn-circle"><i
                                                    data-feather="settings" className="text-white"></i></span>
                                                <div className="w-75 d-inline-block v-middle pl-2">
                                                    <h6 className="message-title mb-0 mt-1">Settings</h6>
                                                    <span
                                                        className="font-12 text-nowrap d-block text-muted text-truncate">You
                                                        can customize this template
                                                        as you want</span>
                                                    <span className="font-12 text-nowrap d-block text-muted">9:08 AM</span>
                                                </div>
                                            </Link>

                                            <Link to="#!"
                                                className="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                <span className="btn btn-primary rounded-circle btn-circle"><i
                                                    data-feather="box" className="text-white"></i></span>
                                                <div className="w-75 d-inline-block v-middle pl-2">
                                                    <h6 className="message-title mb-0 mt-1">Pavan kumar</h6> <span
                                                        className="font-12 text-nowrap d-block text-muted">Just
                                                        see the my admin!</span>
                                                    <span className="font-12 text-nowrap d-block text-muted">9:02 AM</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <Link className="nav-link pt-3 text-center text-dark" to="#!;">
                                            <strong>Check all notifications</strong>
                                            <i className="fa fa-angle-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i data-feather="settings" className="svg-icon"></i>
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="#">Action</Link>
                                <Link className="dropdown-item" to="#">Another action</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="#">Something else here</Link>
                            </div>
                        </li>
                        <li className="nav-item d-none d-md-block">
                            <Link className="nav-link" to="#!">
                                <div className="customize-input">
                                    <select
                                        className="custom-select form-control bg-white custom-radius custom-shadow border-0">
                                        <option selected>EN</option>
                                        <option value="1">AB</option>
                                        <option value="2">AK</option>
                                        <option value="3">BE</option>
                                    </select>
                                </div>
                            </Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav float-right">

                        <li className="nav-item d-none d-md-block">
                            <Link className="nav-link" to="#!">
                                <form>
                                    <div className="customize-input">
                                        <input className="form-control custom-shadow custom-radius border-0 bg-white"
                                            type="search" placeholder="Search" aria-label="Search" />
                                        <i className="form-control-icon" data-feather="search"></i>
                                    </div>
                                </form>
                            </Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#!" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <img src="../assets/images/users/profile-pic.jpg" alt="user" className="rounded-circle"
                                    width="40" />
                                <span className="ml-2 d-none d-lg-inline-block"><span>Hello,</span> <span
                                    className="text-dark">Jason Doe</span> <i data-feather="chevron-down"
                                        className="svg-icon"></i></span>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                                <Link className="dropdown-item" to="#!"><i data-feather="user"
                                    className="svg-icon mr-2 ml-1"></i>
                                    My Profile</Link>
                                <Link className="dropdown-item" to="#!"><i data-feather="credit-card"
                                    className="svg-icon mr-2 ml-1"></i>
                                    My Balance</Link>
                                <Link className="dropdown-item" to="#!"><i data-feather="mail"
                                    className="svg-icon mr-2 ml-1"></i>
                                    Inbox</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="#!"><i data-feather="settings"
                                    className="svg-icon mr-2 ml-1"></i>
                                    Account Setting</Link>
                                <div className="dropdown-divider"></div>
                                {AuthButtons}

                            </div>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;