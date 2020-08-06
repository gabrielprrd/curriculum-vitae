import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FocusedFileContext } from '../../contexts/focusedFileContext';
import ToggleThemeButton from '../Buttons/ToggleThemeButton/index';

import actions from '../../actions/files';

import * as S from './styles';

export default function TabsContainer({ theme, setTheme }) {
  const dispatch = useDispatch();
  const filesOnTab = useSelector((state) => state.filesOnTabReducers.tabFiles);
  const { isFileFocused } = useContext(FocusedFileContext);

  function focusOnFile(file) {
    dispatch(actions.focusOnFile(file));
  }

  return (
    <S.TabsContainer>
      <S.TabsFlexContainer>
        {filesOnTab.map((file) => {
          const link = file.replace(/[\.][^.]*$/gi, ''); // eslint-disable-line
          return (
            <NavLink to={`/${link}`} key={file}>
              <S.TabsInnerContainer
                focusedFile={isFileFocused}
                file={file}
                onClick={() => focusOnFile(file)}
              >
                {file}
              </S.TabsInnerContainer>
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
