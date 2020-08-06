import actionsTypes from '../constants/files';

const INITIAL_STATE = {
  focusedFile: 'curriculum.txt',
};

const focusedFileReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.FOCUS_ON_FILE:
      return { focusedFile: action.focusedFile };
    default:
      return state;
  }
};

export default focusedFileReducers;
