import { combineReducers } from 'redux';

import error from './error';
import auth from './auth';
import { polls, currentPoll } from './polls';
import { users, currentUser } from './users';

export default combineReducers({
  auth,
  error,
  polls,
  currentPoll,
  users,
  currentUser,
});
// export default combineReducers({
//   auth,
//   error,
//   polls,
//   currentPoll,
// });
