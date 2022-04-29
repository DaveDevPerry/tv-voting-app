import React from 'react';

// import ErrorMessage from '../components/ErrorMessage';
import Polls from '../components/Polls';

const HomePage = props => (
  <div className="polls-view-container">
    {/* <div className="error-wrapper">
      <ErrorMessage />
    </div> */}
    {/* <ErrorMessage /> */}
    <Polls {...props} />
  </div>
);

export default HomePage;
