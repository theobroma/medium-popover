import { combineReducers } from 'redux';
import medium from './reducers/medium';
import comments from './reducers/comments';

export default combineReducers({
  medium,
  comments
});
