import React from 'react';
import { Provider } from 'react-redux';
import decode from 'jwt-decode';

import { store } from './store/index';
import { setToken, setCurrentUser, addError } from './store/actions';

import Auth from './components/Auth';
import ErrorMessage from './components/ErrorMessage';

if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
    store.dispath(addError(err));
  }
}

const App = () => (
  <Provider store={store}>
    <Auth />
    <ErrorMessage />
  </Provider>
);

export default App;
