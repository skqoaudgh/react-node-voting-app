import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const initialState = {
  auth: { isAuthenticated: false },
  error: { message: null },
  polls: [],
  currentPoll: {
    _id: '5b086e20f7d2381502ce0e46',
    options: [],
    question: '',
  },
};

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const enhancers = compose(applyMiddleware(thunk), devTools);

export const store = createStore(rootReducer, initialState, enhancers);
