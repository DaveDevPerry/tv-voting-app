import React from 'react';
// import { Redirect } from 'react-router-dom';

// import ErrorMessage from '../components/ErrorMessage';
import Users from '../components/Users';

const UsersPage = (props, isAuthenticated) => {
  // if (!isAuthenticated) return <Redirect to="/login" />;
  // console.log(props, 'props');
  // console.log(isAuthenticated, 'auth');
  console.log(props, 'props');

  return (
    <div className="polls-view-container">
      <p>user page</p>
      {/* <div className="error-wrapper">
      <ErrorMessage />
    </div> */}
      {/* <ErrorMessage /> */}
      <Users {...props} />
    </div>
  );
};

export default UsersPage;
