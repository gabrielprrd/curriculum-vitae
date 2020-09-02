import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// Theming
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './assets/GlobalStyles/theme';

// Styling
import Layout from './assets/GlobalStyles/layout';
import GlobalStyle from './assets/GlobalStyles/globalStyles';

// Components
import Aside from './components/Aside/index';
import Terminal from './components/Terminal/index';
import TabsContainer from './components/TabsContainer/index';

// Pages
import Curriculum from './pages/Curriculum/index';
import Portfolio from './pages/Portfolio/index';

// Context
import FocusedFileProvider from './contexts/focusedFileContext';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <FocusedFileProvider>
        <>
          <GlobalStyle />
          <Layout>
            <Router basename={`${process.env.PUBLIC_URL}/`}>
              <Route exact path={`${process.env.PUBLIC_URL}/`}>
                <Redirect to={`${process.env.PUBLIC_URL}/curriculum`} />
              </Route>
              <Route
                path={`${process.env.PUBLIC_URL}/curriculum`}
                component={Curriculum}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/portfolio`}
                component={Portfolio}
              />
              <Aside />
              <TabsContainer theme={theme} setTheme={setTheme} />
            </Router>
            <Terminal />
          </Layout>
        </>
      </FocusedFileProvider>
    </ThemeProvider>
  );
}

TabsContainer.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default App;
