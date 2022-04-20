import React from 'react';

import Poll from '../components/Poll';
import ErrorMessage from '../components/ErrorMessage';

const PollPage = ({ match, getPoll }) => {
  getPoll(match.params.id);

  return (
    <div className="poll-page-container">
      <div className="error-wrapper">
        <ErrorMessage />
      </div>
      {/* CHECK HERE IF ALREADY VOTED - IF SO RENDER PIE INSTEAD OF POLL */}
      <Poll />
    </div>
  );
};

export default PollPage;
