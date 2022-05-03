import React from 'react';
// import { Redirect } from 'react-router-dom';

// import ErrorMessage from '../components/ErrorMessage';
import Polls from '../components/Polls';

const HomePage = (props, isAuthenticated) => {
  // if (!isAuthenticated) return <Redirect to="/login" />;
  // console.log(props, 'props');
  // console.log(isAuthenticated, 'auth');

  return (
    <div className="polls-view-container">
      {/* <div className="error-wrapper">
      <ErrorMessage />
    </div> */}
      {/* <ErrorMessage /> */}
      <Polls {...props} />
    </div>
  );
};

export default HomePage;
