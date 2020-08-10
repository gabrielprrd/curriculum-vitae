import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import actions from '../../actions/files';

// Context
import { FocusedFileContext } from '../../contexts/focusedFileContext';

// Images
import FolderIcon from '../../assets/images/folder-logo.png';

import * as S from './styles';

export default function Aside() {
  const filesList = useSelector((state) => state.fileReducers.files);
  const filesOnTab = useSelector((state) => state.filesOnTabReducers.tabFiles);
  const dispatch = useDispatch();
  const { isFileFocused } = useContext(FocusedFileContext);

  function addFileToTabs(file) {
    const list = filesOnTab.map((item) => item.title);
    if (!list.includes(file.title)) {
      dispatch(actions.addFileToTabs(file));
    }
    dispatch(actions.focusOnFile(file));
  }

  return (
    <S.Aside>
      <h3>Explorer</h3>
      <S.FolderContainer>
        <img src={FolderIcon} alt="Folder icon" />
        <p>src</p>
      </S.FolderContainer>
      <S.FilesListContainer>
        {filesList.map((file) => {
          const link = file.title.replace(/[\.][^.]*$/gi, ''); // eslint-disable-line
          return (
            <NavLink to={`/${link}`} key={file.title}>
              <S.FileContainer
                focusedFile={isFileFocused}
                file={file}
                onClick={() => addFileToTabs(file)}
              >
                <img src={file.icon} alt="file icon" />

                {file.title}
              </S.FileContainer>
            </NavLink>
          );
        })}
      </S.FilesListContainer>
    </S.Aside>
  );
}
