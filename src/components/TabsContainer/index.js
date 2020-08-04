import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ToggleThemeButton from '../Buttons/ToggleThemeButton/index';

import * as S from './styles';

export default function TabsContainer({ theme, setTheme }) {
  const filesOnTab = useSelector(
    (state) => state.selectedFilesReducers.tabFiles
  );

  return (
    <S.TabsContainer>
      <S.TabsFlexContainer>
        {filesOnTab.map((file) => {
          const link = file.replace(/[\.][^.]*$/gi, ''); // eslint-disable-line
          return (
            <NavLink to={`/${link}`} key={file}>
              <S.TabsInnerContainer>{file}</S.TabsInnerContainer>
            </NavLink>
          );
        })}
      </S.TabsFlexContainer>
      <ToggleThemeButton theme={theme} setTheme={setTheme} />
    </S.TabsContainer>
  );
}

TabsContainer.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};
