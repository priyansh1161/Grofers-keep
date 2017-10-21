// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import items from './itemsReducer';

const rootReducer = combineReducers({
  items,
  routing: routerReducer
});

export default rootReducer;
