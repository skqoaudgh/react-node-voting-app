import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const initialState = {
  error: { message: null },
};

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const enhancers = compose(applyMiddleware(thunk), devTools);

export const store = createStore(rootReducer, initialState, enhancers);
