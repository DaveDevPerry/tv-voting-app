import React from 'react';

import Polls from '../components/Polls';
// import Users from '../components/Users';

const HomePage = (props, isAuthenticated) => {
  // if (!isAuthenticated) return <Redirect to="/login" />;
  console.log(props, 'props');
  return (
    <div className="polls-view-container">
      {/* <div className="error-wrapper">
      <ErrorMessage />
    </div> */}
      <Polls {...props} />
      {/* <Users {...props} /> */}
    </div>
  );
};

export default HomePage;
