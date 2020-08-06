import { combineReducers } from 'redux';
import fileReducers from './files';
import filesOnTabReducers from './filesOnTab';
import focusedFileReducers from './focusedFile';

const reducers = combineReducers({
  fileReducers,
  filesOnTabReducers,
  focusedFileReducers,
});

export default reducers;
