import React, { Fragment } from 'react';
import { createContext, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import decode from 'jwt-decode';

import { store } from '../store';
import { setToken, setCurrentUser, addError } from '../store/actions';

import NavBar from './NavBar';
import RouteViews from './RouteViews';

export const ThemeContext = createContext(null);

if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
    store.dispatch(addError(err));
  }
}

const App = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(curr => (curr === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Provider store={store}>
        <Router>
          <Fragment>
            <div className="App" id={theme}>
              <NavBar toggleTheme={toggleTheme} theme={theme} />
              <RouteViews />
            </div>
          </Fragment>
        </Router>
      </Provider>
    </ThemeContext.Provider>
  );
};

export default App;
