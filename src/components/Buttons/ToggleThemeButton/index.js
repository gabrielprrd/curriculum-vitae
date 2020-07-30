import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function ToggleThemeButton({ theme, setTheme }) {
  function toggleTheme() {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }
  return (
    <>
      <S.CheckBoxWrapper>
        <S.CheckBox id="checkbox" type="checkbox" />
        <S.CheckBoxLabel htmlFor="checkbox" onClick={toggleTheme} />
      </S.CheckBoxWrapper>
    </>
  );
}

ToggleThemeButton.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};
