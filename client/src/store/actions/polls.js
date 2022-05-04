import API from '../../services/api';
import { SET_POLLS, SET_CURRENT_POLL } from '../actionTypes';
import { addError, removeError } from './error';

export const setPolls = polls => ({
  type: SET_POLLS,
  polls,
});

export const setCurrentPoll = poll => ({
  type: SET_CURRENT_POLL,
  poll,
});

export const getPolls = () => {
  return async dispatch => {
    try {
      const polls = await API.call('get', `polls`);
      // console.log('get polls');
      polls.sort((a, b) => {
        return a.voted.length - b.voted.length;
      });
      dispatch(setPolls(polls));
      dispatch(removeError());
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};

export const getUserPolls = () => {
  return async dispatch => {
    try {
      const polls = await API.call('get', 'polls/user');
      // console.log('get user polls');
      polls.sort((a, b) => {
        return b.voted.length - a.voted.length;
      });
      dispatch(setPolls(polls));
      dispatch(removeError());
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};
export const getPopularPolls = () => {
  return async dispatch => {
    try {
      const polls = await API.call('get', `polls`);
      // console.log('sorted', polls);
      polls.sort((a, b) => {
        return b.voted.length - a.voted.length;
      });
      dispatch(setPolls(polls));
      dispatch(removeError());
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};
// export const getNotVotedPolls = user => {
//   return async dispatch => {
//     try {
//       const polls = await API.call('get', 'polls');
//       console.log('get not voted polls', polls, user);
//       dispatch(setPolls(polls));
//       dispatch(removeError());
//     } catch (err) {
//       const { error } = err.response.data;
//       dispatch(addError(error));
//     }
//   };
// };

export const createPoll = data => {
  return async dispatch => {
    try {
      const poll = await API.call('post', 'polls', data);
      dispatch(setCurrentPoll(poll));
      dispatch(removeError());
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};

export const getCurrentPoll = path => {
  return async dispatch => {
    try {
      const poll = await API.call('get', `polls/${path}`);
      dispatch(setCurrentPoll(poll));
      dispatch(removeError());
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};

export const vote = (path, data) => {
  return async dispatch => {
    try {
      const poll = await API.call('post', `polls/${path}`, data);
      dispatch(setCurrentPoll(poll));
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};
