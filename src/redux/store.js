import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import blockchainReducer from './blockchain/blockchainReducer';
import dataReducer from './data/dataReducer';
import mintReducer from './mint/mintReducer';
// import { composeWithDevTools } from '@redux-devtools/core';

const rootReducer = combineReducers({
	blockchain: blockchainReducer,
	data: dataReducer,
	mint: mintReducer,
});

const middleware = [thunk];

const composeEnhancers = applyMiddleware(...middleware);

const configureStore = () => {
	return createStore(rootReducer, composeEnhancers);
};
const store = configureStore();

export default store;
