import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import * as S from './styles';

export default function Aside() {
  const filesList = useSelector((state) => state.fileReducers.files);

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
              <S.FileContainer>{file}</S.FileContainer>
            </NavLink>
          );
        })}
      </S.FilesListContainer>
    </S.Aside>
  );
}
