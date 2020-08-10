// import React, { useState, useEffect, createContext } from 'react';
// import PropTypes from 'prop-types';

// export const LayoutContext = createContext();

// export default function LayoutProvider({ children }) {
//   const [terminalVisibility, setTerminalVisibility] = useState(true);

//   useEffect(() => {
//     setIsFileFocused(focusedFile);
//     if (!filesOnTab.includes(focusedFile)) {
//       setIsFileFocused(filesOnTab[0]);
//     }
//   }, [focusedFile, filesOnTab]);

//   return (
//     <LayoutContext.Provider
//       value={{ terminalVisibility, setTerminalVisibility }}
//     >
//       {children}
//     </LayoutContext.Provider>
//   );
// }

// LayoutProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };
