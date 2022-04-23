import { combineReducers } from 'redux';

import error from './error';
import auth from './auth';
import { polls, currentPoll } from './polls';
import { users } from './users';

export default combineReducers({
  auth,
  error,
  polls,
  currentPoll,
  users,
});
// export default combineReducers({
//   auth,
//   error,
//   polls,
//   currentPoll,
// });
