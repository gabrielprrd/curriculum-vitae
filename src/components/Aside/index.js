import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import actions from '../../actions/files';
import { FocusedFileContext } from '../../contexts/focusedFileContext';

import * as S from './styles';

export default function Aside() {
  const filesList = useSelector((state) => state.fileReducers.files);
  const filesOnTab = useSelector((state) => state.filesOnTabReducers.tabFiles);
  const dispatch = useDispatch();
  const { isFileFocused } = useContext(FocusedFileContext);

  function addFileToTabs(file) {
    if (!filesOnTab.includes(file)) {
      dispatch(actions.addFileToTabs(file));
    }
    dispatch(actions.focusOnFile(file));
  }

  return (
    <S.Aside>
      <h3>Explorer</h3>
      <S.FolderContainer>
        <p>src</p>
      </S.FolderContainer>
      <S.FilesListContainer>
        {filesList.map((file) => {
          const link = file.replace(/[\.][^.]*$/gi, ''); // eslint-disable-line
          return (
            <NavLink to={`/${link}`} key={file}>
              <S.FileContainer
                focusedFile={isFileFocused}
                file={file}
                onClick={() => addFileToTabs(file)}
              >
                {file}
              </S.FileContainer>
            </NavLink>
          );
        })}
      </S.FilesListContainer>
    </S.Aside>
  );
}
