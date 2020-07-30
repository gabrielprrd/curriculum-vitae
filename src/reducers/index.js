import { combineReducers } from 'redux';
import fileReducers from './files';

const reducers = combineReducers({
  fileReducers,
});

export default reducers;
