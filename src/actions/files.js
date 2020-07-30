import actionsTypes from '../constants/files';

const actions = {
  createFile: () => ({
    type: actionsTypes.CREATE_FILE,
  }),
  deleteFile: () => ({
    type: actionsTypes.DELETE_FILE,
  }),
};

export default actions;
