import { SET_USERS } from '../actionTypes';
// import { SET_USERS, SET_CURRENT_POLL } from '../actionTypes';

export const users = (state = [], action) => {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    default:
      return state;
  }
};

// export const currentPoll = (state = {}, action) => {
//   switch (action.type) {
//     case SET_CURRENT_POLL:
//       return action.poll;
//     default:
//       return state;
//   }
// };
