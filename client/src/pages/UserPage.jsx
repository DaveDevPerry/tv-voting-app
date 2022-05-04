import React from 'react';

import User from '../components/User';
import ErrorMessage from '../components/ErrorMessage';
// import UsersPage from './UsersPage';

const UserPage = ({ match, getUser }) => {
  getUser(match.params.id);

  return (
    <div className="poll-page-container">
      <div className="error-wrapper">
        <ErrorMessage />
      </div>
      {/* CHECK HERE IF ALREADY VOTED - IF SO RENDER PIE INSTEAD OF POLL */}
      <User />
    </div>
  );
};

export default UserPage;
