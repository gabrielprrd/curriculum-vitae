import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

export default function HideTerminalButton({ hideTerminal }) {
  return (
    <S.HideTerminalButton onClick={hideTerminal}>
      <S.Bar />
      <S.Bar2 />
    </S.HideTerminalButton>
  );
}

HideTerminalButton.propTypes = {
  hideTerminal: PropTypes.func.isRequired,
};
