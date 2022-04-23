import React from 'react';

// import ErrorMessage from '../components/ErrorMessage';
import Users from '../components/Users';

const UserPage = props => (
  <div>
    {/* <div className="error-wrapper">
      <ErrorMessage />
    </div> */}
    {/* <ErrorMessage /> */}
    <Users {...props} />
  </div>
);

export default UserPage;
