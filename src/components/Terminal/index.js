import React, { useState, useRef } from 'react';
import * as S from './styles';

import HideTerminalButton from '../Buttons/HideTerminalButton/index';

export default function Terminal() {
  const [terminalVisibility, setTerminalVisibility] = useState(true);
  const base = 'employer:~/development/curriculum-vitae-ide$';
  const textInput = useRef();

  function focusEditableTerminal() {
    textInput.current.focus();
  }

  function hideTerminal() {
    setTerminalVisibility(false);
  }

  return (
    <>
      {terminalVisibility && (
        <S.Terminal
          onClick={focusEditableTerminal}
          visibility={terminalVisibility ? 1 : 0}
        >
          <S.TitleContainer>
            <h3>Terminal</h3>
            <HideTerminalButton hideTerminal={hideTerminal} />
          </S.TitleContainer>
          <S.TextFlexContainer>
            <S.BaseText>
              <strong>{base}</strong>
              &emsp;
            </S.BaseText>
            <S.EditableText ref={textInput} />
          </S.TextFlexContainer>
        </S.Terminal>
      )}
    </>
  );
}
