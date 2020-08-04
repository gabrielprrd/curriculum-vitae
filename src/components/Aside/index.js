import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import actions from '../../actions/files';

import * as S from './styles';

export default function Aside() {
  const filesList = useSelector((state) => state.fileReducers.files);
  const filesOnTab = useSelector(
    (state) => state.selectedFilesReducers.tabFiles
  );
  const dispatch = useDispatch();

  function addFileToTabs(file) {
    if (!filesOnTab.includes(file)) {
      dispatch(actions.addFileToTabs(file));
    }
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
              <S.FileContainer onClick={() => addFileToTabs(file)}>
                {file}
              </S.FileContainer>
            </NavLink>
          );
        })}
      </S.FilesListContainer>
    </S.Aside>
  );
}
