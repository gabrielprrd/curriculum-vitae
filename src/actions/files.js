import actionsTypes from '../constants/files';

const actions = {
  createFile: () => ({
    type: actionsTypes.CREATE_FILE,
  }),
  deleteFile: () => ({
    type: actionsTypes.DELETE_FILE,
  }),
  addFileToTabs: (file) => ({
    type: actionsTypes.ADD_FILE_TO_TABS,
    tabFiles: file,
  }),
  removeFileFromTabs: (file) => ({
    type: actionsTypes.REMOVE_FILE_FROM_TABS,
    removedFile: file,
  }),
  focusOnFile: (file) => ({
    type: actionsTypes.FOCUS_ON_FILE,
    focusedFile: file,
  }),
};

export default actions;
