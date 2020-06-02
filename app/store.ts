import { Store, createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

function systemReducer() {
  console.log('systemReducer');
}

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  system: systemReducer,
});

export function configureStore(): Store {
  const middlewares = [sagaMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));

  return store;
}
