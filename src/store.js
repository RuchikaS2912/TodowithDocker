// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// // import monitorReducersEnhancer from './enhancers/monitorReducers'
// // import loggerMiddleware from './middleware/logger'
// // import rootReducer from './reducers'

// export default function configureAppStore(preloadedState) {
//   const store = configureStore({
//     reducer: {},
//     // middleware: [loggerMiddleware, ...getDefaultMiddleware()],
//     preloadedState,
//     // enhancers: [monitorReducersEnhancer],
//   });

//   //   if (process.env.NODE_ENV !== 'production' && module.hot) {
//   //     module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
//   //   }

//   return store;
// }

import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({});

const initialState = {};

console.log(initialState, 'initialState');

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
