import API from '../../services/api';
import { SET_USERS, SET_CURRENT_USER } from '../actionTypes';
// import { SET_USERS, SET_CURRENT_POLL } from '../actionTypes';
import { addError, removeError } from './error';

export const setUsers = users => ({
  type: SET_USERS,
  users,
});

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user,
});

export const getUsers = () => {
  return async dispatch => {
    try {
      console.log('users?');
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

// // export const getUserPolls = () => {
// //   return async dispatch => {
// //     try {
// //       const polls = await API.call('get', 'polls/user');
// //       dispatch(setPolls(polls));
// //       dispatch(removeError());
// //     } catch (err) {
// //       const { error } = err.response.data;
// //       dispatch(addError(error));
// //     }
// //   };
// // };

// // export const createPoll = data => {
// //   return async dispatch => {
// //     try {
// //       const poll = await API.call('post', 'polls', data);
// //       dispatch(setCurrentPoll(poll));
// //       dispatch(removeError());
// //     } catch (err) {
// //       const { error } = err.response.data;
// //       dispatch(addError(error));
// //     }
// //   };
// // };

export const getCurrentUser = path => {
  return async dispatch => {
    try {
      const user = await API.call('get', `users/${path}`);
      dispatch(setCurrentUser(user));
      dispatch(removeError());
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};

// // export const vote = (path, data) => {
// //   return async dispatch => {
// //     try {
// //       const poll = await API.call('post', `polls/${path}`, data);
// //       dispatch(setCurrentPoll(poll));
// //     } catch (err) {
// //       const { error } = err.response.data;
// //       dispatch(addError(error));
// //     }
// //   };
// // };
