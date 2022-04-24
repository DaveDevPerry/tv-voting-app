import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const DEFAULT_STATE = {
  auth: { isAuthenticated: false },
  error: { message: null },
  polls: [],
  currentPoll: {
    _id: '5b086e20f7d2381502ce0e46',
    options: [],
    question: 'test_poll',
  },
};

// const devTools =
//   process.env.NODE_ENV === 'development'
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
//       window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
//     : null;

// export const store = createStore(
//   rootReducer,
//   DEFAULT_STATE,
//   compose(applyMiddleware(thunk), devTools),
// );

// WORKING ORIGINAL
export const store = createStore(
  rootReducer,
  DEFAULT_STATE,
  compose(applyMiddleware(thunk), null),
);
// export const store = createStore(
//   rootReducer,
//   DEFAULT_STATE,
//   compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&
//       window.__REDUX_DEVTOOLS_EXTENSION__(),
//   ),
// );
