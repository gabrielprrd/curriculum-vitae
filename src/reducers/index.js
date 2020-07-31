import { combineReducers } from 'redux';
import fileReducers from './files';
import selectedFilesReducers from './selectedFiles';

const reducers = combineReducers({
  fileReducers,
  selectedFilesReducers,
});

export default reducers;
