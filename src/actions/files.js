import actionsTypes from '../constants/files';

const actions = {
  createFile: () => ({
    type: actionsTypes.CREATE_FILE,
  }),
  deleteFile: () => ({
    type: actionsTypes.DELETE_FILE,
  }),
  addFileToTabs: () => ({
    type: actionsTypes.ADD_FILE_TO_TABS,
  }),
  removeFileFromTabs: () => ({
    type: actionsTypes.REMOVE_FILE_FROM_TABS,
  }),
};

export default actions;
