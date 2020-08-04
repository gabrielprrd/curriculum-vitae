import actionsTypes from '../constants/files';

const INITIAL_STATE = {
  tabFiles: ['curriculum.txt'],
};

const selectedFilesReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.ADD_FILE_TO_TABS:
      return { tabFiles: [...state.tabFiles, action.tabFiles] };
    case actionsTypes.REMOVE_FILE_FROM_TABS:
      // needs to create a way to remove the item
      return { ...state, files: [state.filesOnTab] };
    default:
      return state;
  }
};

export default selectedFilesReducers;
