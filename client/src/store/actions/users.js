import API from '../../services/api';
import { SET_USERS } from '../actionTypes';
// import { SET_USERS, SET_CURRENT_POLL } from '../actionTypes';
import { addError, removeError } from './error';

export const setUsers = users => ({
  type: SET_USERS,
  users,
});

// export const setCurrentPoll = poll => ({
//   type: SET_CURRENT_POLL,
//   poll,
// });

export const getUsers = () => {
  return async dispatch => {
    try {
      const users = await API.call('get', `users`);
      console.log(users, 'users?');
      dispatch(setUsers(users));
      dispatch(removeError());
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};

// export const getUserPolls = () => {
//   return async dispatch => {
//     try {
//       const polls = await API.call('get', 'polls/user');
//       dispatch(setPolls(polls));
//       dispatch(removeError());
//     } catch (err) {
//       const { error } = err.response.data;
//       dispatch(addError(error));
//     }
//   };
// };

// export const createPoll = data => {
//   return async dispatch => {
//     try {
//       const poll = await API.call('post', 'polls', data);
//       dispatch(setCurrentPoll(poll));
//       dispatch(removeError());
//     } catch (err) {
//       const { error } = err.response.data;
//       dispatch(addError(error));
//     }
//   };
// };

// export const getCurrentPoll = path => {
//   return async dispatch => {
//     try {
//       const poll = await API.call('get', `polls/${path}`);
//       dispatch(setCurrentPoll(poll));
//       dispatch(removeError());
//     } catch (err) {
//       const { error } = err.response.data;
//       dispatch(addError(error));
//     }
//   };
// };

// export const vote = (path, data) => {
//   return async dispatch => {
//     try {
//       const poll = await API.call('post', `polls/${path}`, data);
//       dispatch(setCurrentPoll(poll));
//     } catch (err) {
//       const { error } = err.response.data;
//       dispatch(addError(error));
//     }
//   };
// };
