import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import movieReducer from './app/redux/reducer'

const rootReducer = combineReducers(
    { movieReducer}
);

const configureStore = (initialState) => {
    const middleware = [thunk];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));
    return store;
}

export default configureStore;