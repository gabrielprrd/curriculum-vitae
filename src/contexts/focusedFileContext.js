import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const FocusedFileContext = createContext();

export default function FocusedFileProvider({ children }) {
  const focusedFile = useSelector(
    (state) => state.focusedFileReducers.focusedFile
  );
  const filesOnTab = useSelector((state) => state.filesOnTabReducers.tabFiles);
  const [isFileFocused, setIsFileFocused] = useState(focusedFile);

  useEffect(() => {
    setIsFileFocused(focusedFile);
    if (!filesOnTab.includes(focusedFile)) {
      setIsFileFocused(filesOnTab[0]);
    }
  }, [focusedFile, filesOnTab]);

  return (
    <FocusedFileContext.Provider value={{ isFileFocused, setIsFileFocused }}>
      {children}
    </FocusedFileContext.Provider>
  );
}

FocusedFileProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
