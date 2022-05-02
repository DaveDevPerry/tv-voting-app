import React, { Fragment } from 'react';
import ReactSwitch from 'react-switch';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../store/actions';

const Navbar = ({ auth, logout, toggleTheme, theme }) => (
  <nav className="navbar">
    <div className="container">
      {/* <h1 id="title">How To Make Friends and Influence People</h1> */}
      <ul className="navbar-container">
        {/* <li>
          <Link className="navbar-brand" to="/">
            TV Fan Poll
          </Link>
        </li> */}
        {/* <li className="left"> */}
        <li>
          <div className="switch">
            <label>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
            <ReactSwitch
              onChange={toggleTheme}
              checked={theme === 'dark'}
              onColor="#333"
              offColor="#ababab"
            />
          </div>
        </li>
        <li>
          <Link to="/">
            <img
              src={
                theme === 'light'
                  ? '/images/my_house-icon.png'
                  : '/images/my_house-icon-dark.png'
              }
              alt="home"
              id="home-icon"
            />
            {/* <img src="/images/my_house-icon.png" alt="home" id="home-icon" /> */}
          </Link>
        </li>
        {!auth.isAuthenticated && (
          <Fragment>
            {/* <li>
              <Link className="navbar-item" to="/register">
                Register
              </Link>
            </li> */}
            <li className="right">
              <Link className="navbar-item" to="/register">
                Register
              </Link>
              <br />
              <Link className="navbar-item" to="/login">
                Login
              </Link>
            </li>
          </Fragment>
        )}
        {auth.isAuthenticated && (
          <Fragment>
            {/* <li> */}
            {/* <p className="navbar-user">{auth.user.username}</p> */}
            {/* <p className="navbar-user">Logged in as {auth.user.username}</p> */}
            {/* <h1>How To Make Friends and Influence People</h1> */}
            {/* </li> */}
            {/* <li>
              <Link className="navbar-item" to="/poll/new">
                New Poll
              </Link>
            </li> */}
            <li className="right">
              <p className="navbar-user">{auth.user.username}</p>
              <a className="navbar-item" onClick={logout} id="nav-logout">
                Logout
              </a>
            </li>
          </Fragment>
        )}
      </ul>
      {/* {auth.isAuthenticated && (
        <p className="navbar-user">Logged in as {auth.user.username}</p>
      )} */}
    </div>
  </nav>
);

export default connect(
  store => ({
    auth: store.auth,
  }),
  { logout },
)(Navbar);
