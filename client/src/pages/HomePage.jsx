import React from 'react';
// import { Redirect } from 'react-router-dom';

// import ErrorMessage from '../components/ErrorMessage';
import Polls from '../components/Polls';
// import Users from '../components/Users';

const HomePage = (props, isAuthenticated) => {
  // if (!isAuthenticated) return <Redirect to="/login" />;
  // console.log(props, 'props');
  // console.log(isAuthenticated, 'auth');
  console.log(props, 'props');
  return (
    <div className="polls-view-container">
      {/* <div className="error-wrapper">
      <ErrorMessage />
    </div> */}
      {/* <ErrorMessage /> */}
      <Polls {...props} />
      {/* <Users {...props} /> */}
    </div>
  );
};

export default HomePage;
