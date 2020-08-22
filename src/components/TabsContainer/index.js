import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

// Context
import { FocusedFileContext } from '../../contexts/focusedFileContext';

// Components
import ToggleThemeButton from '../Buttons/ToggleThemeButton/index';
import CloseTabFileButton from '../Buttons/CloseTabFileButton/index';

// Actions
import actions from '../../actions/files';

import * as S from './styles';

function TabsContainer({ theme, setTheme }) {
  const [isMenuClicked, setClick] = useState(false);
  const dispatch = useDispatch();
  const filesOnTab = useSelector((state) => state.filesOnTabReducers.tabFiles);
  const { isFileFocused } = useContext(FocusedFileContext);

  function focusOnFile(file) {
    dispatch(actions.focusOnFile(file));
  }

  function removeFileFromTabs(file) {
    if (filesOnTab.length > 1) {
      dispatch(actions.removeFileFromTabs(file));
    }
  }

  function toggleNav() {
    setClick(!isMenuClicked);
  }

  function hideNav() {
    setClick(false);
  }

  return (
    <S.TabsContainer isMenuClicked={isMenuClicked}>
      <S.TabsFlexContainer>
        {filesOnTab.map((file) => {
          const link = file.title.replace(/[\.][^.]*$/gi, ''); // eslint-disable-line
          return (
            <S.Tab key={file.title}>
              <NavLink to={`/${link}`} onClick={hideNav}>
                <S.InnerTab
                  focusedFile={isFileFocused}
                  file={file}
                  onClick={() => focusOnFile(file)}
                >
                  <img src={file.icon} alt="file icon" />
                  {file.title}
                </S.InnerTab>
              </NavLink>
              <CloseTabFileButton
                file={file}
                removeFileFromTabs={() => removeFileFromTabs(file)}
              />
            </S.Tab>
          );
        })}
      </S.TabsFlexContainer>
      <ToggleThemeButton theme={theme} setTheme={setTheme} />
      <S.BurgerMenu onClick={toggleNav}>
        <S.Bar isMenuClicked={isMenuClicked} />
        <S.Bar2 isMenuClicked={isMenuClicked} />
        <S.Bar3 isMenuClicked={isMenuClicked} />
      </S.BurgerMenu>
    </S.TabsContainer>
  );
}

export default TabsContainer;

TabsContainer.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};
