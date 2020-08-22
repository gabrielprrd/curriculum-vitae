import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

export default function CloseTabFileButton({ removeFileFromTabs, file }) {
  return (
    <S.CloseFileButton onClick={() => removeFileFromTabs(file)}>
      <S.Bar />
      <S.Bar2 />
    </S.CloseFileButton>
  );
}

CloseTabFileButton.propTypes = {
  removeFileFromTabs: PropTypes.func.isRequired,
  file: PropTypes.shape({
    tabFiles: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
