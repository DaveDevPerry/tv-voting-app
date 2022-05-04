import { SET_USERS, SET_CURRENT_USER } from '../actionTypes';
// import { SET_USERS, SET_CURRENT_POLL } from '../actionTypes';

export const users = (state = [], action) => {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    default:
      return state;
  }
};

export const currentUser = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.user;
    default:
      return state;
  }
};
