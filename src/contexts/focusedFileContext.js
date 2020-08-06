import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const FocusedFileContext = createContext();

export default function FocusedFileProvider({ children }) {
  const focusedFile = useSelector(
    (state) => state.focusedFileReducers.focusedFile
  );
  const [isFileFocused, setIsFileFocused] = useState(focusedFile);

  useEffect(() => {
    setIsFileFocused(focusedFile);
  }, [focusedFile]);

  return (
    <FocusedFileContext.Provider value={{ isFileFocused, setIsFileFocused }}>
      {children}
    </FocusedFileContext.Provider>
  );
}

FocusedFileProvider.propTypes = {
  children: PropTypes.string.isRequired,
};
