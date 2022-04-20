import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../store/actions';

const Navbar = ({ auth, logout }) => (
  <nav className="navbar">
    <div className="container">
      {/* <h1 id="title">How To Make Friends and Influence People</h1> */}
      <ul className="navbar-container">
        {/* <li>
          <Link className="navbar-brand" to="/">
            <img
              src="/images/terrorvision-logo.webp"
              alt="terrorvision logo"
              type="webp"
              id="tv-logo"
            />
          </Link>
        </li> */}
        <li>
          <Link className="navbar-brand" to="/">
            TV Poll
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
            <li>
              {/* <p className="navbar-user">{auth.user.username}</p> */}
              {/* <p className="navbar-user">Logged in as {auth.user.username}</p> */}
              {/* <h1>How To Make Friends and Influence People</h1> */}
            </li>
            {/* <li>
              <Link className="navbar-item" to="/poll/new">
                New Poll
              </Link>
            </li> */}
            <li className="right">
              <p className="navbar-user">{auth.user.username}</p>
              <a className="navbar-item" onClick={logout}>
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
