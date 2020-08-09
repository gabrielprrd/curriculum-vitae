import actionsTypes from '../constants/files';

const INITIAL_STATE = {
  tabFiles: ['curriculum.txt'],
};

const filesOnTabReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.ADD_FILE_TO_TABS:
      return { tabFiles: [...state.tabFiles, action.tabFiles] };
    case actionsTypes.REMOVE_FILE_FROM_TABS:
      return {
        tabFiles: state.tabFiles.filter((item) => item !== action.removedFile),
      };
    default:
      return state;
  }
};

export default filesOnTabReducers;
