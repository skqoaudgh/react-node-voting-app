import React from 'react';
import { Provider } from 'react-redux';
import decode from 'jwt-decode';

import { store } from './store/index';
import { setToken, setCurrentUser, addError } from './store/actions';

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
    <div>Hello World!</div>
  </Provider>
);

export default App;
