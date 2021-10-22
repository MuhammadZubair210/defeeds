import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

const middleware = applyMiddleware(thunkMiddleware);

const enhacer = compose(middleware);

const store = createStore(
    rootReducer,
    enhacer
);

export default store;