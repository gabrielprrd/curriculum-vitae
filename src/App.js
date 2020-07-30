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

function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <>
        <GlobalStyle />
        <Layout>
          <Router>
            <Route exact path="/">
              <Redirect to="/curriculum" />
            </Route>
            <Route path="/curriculum" component={Curriculum} />
            <Route path="/portfolio" component={Portfolio} />
            <Aside />
            <TabsContainer theme={theme} setTheme={setTheme} />
          </Router>
          <Terminal />
        </Layout>
      </>
    </ThemeProvider>
  );
}

TabsContainer.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default App;
