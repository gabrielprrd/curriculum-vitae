import React from 'react';
import PropTypes from 'prop-types';
import ToggleThemeButton from '../Buttons/ToggleThemeButton/index';

import * as S from './styles';

export default function TabsContainer({ theme, setTheme }) {
  return (
    <S.TabsContainer>
      <S.TabsInnerContainer>tabscontainer</S.TabsInnerContainer>
      <ToggleThemeButton theme={theme} setTheme={setTheme} />
    </S.TabsContainer>
  );
}

TabsContainer.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};
