import React, { useRef, useState } from 'react';
import * as S from './styles';

import downloadablePdf from '../../assets/pdf/downloadablePdf';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const base = 'employer:~/development/curriculum-vitae-ide$';
  const textInput = useRef();

  function focusEditableTerminal() {
    textInput.current.focus();
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  function downloadPdf() {
    window.location.href = downloadablePdf;
  }

  function handleEnter(event) {
    if (event.charCode === 13) {
      const formattedInput = input.replace(/\s\s+/g, ' ').trim();
      if (formattedInput === 'npm run download') {
        downloadPdf();
        const string = 'Preparing download... ';
        setFeedback(string);
        setTimeout(() => {
          setFeedback(`${string} Done! Enjoy the pdf version.`);
        }, 3000);
      } else {
        setFeedback(`Error: ${formattedInput} is not a command.`);
      }
      setInput('');
    }
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
          <S.EditableText
            ref={textInput}
            value={input}
            onChange={(event) => handleChange(event)}
            onKeyPress={(event) => handleEnter(event)}
          />
        </S.TextFlexContainer>
        <S.FeedbackText>{feedback}</S.FeedbackText>
      </S.Terminal>
    </>
  );
}
