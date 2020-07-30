import React, { useRef } from 'react';
import * as S from './styles';

export default function Terminal() {
  const base = 'employer:~/development/curriculum-vitae-ide$';
  const textInput = useRef();

  function focusEditableTerminal() {
    textInput.current.focus();
  }

  return (
    <>
      <S.Terminal onClick={focusEditableTerminal}>
        <S.TitleContainer>
          <h3>Terminal</h3>
        </S.TitleContainer>
        <S.TextFlexContainer>
          <S.BaseText>
            <strong>{base}</strong>
            &emsp;
          </S.BaseText>
          <S.EditableText ref={textInput} />
        </S.TextFlexContainer>
      </S.Terminal>
    </>
  );
}
