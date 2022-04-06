import { Provider } from 'react-redux';
import { store } from 'redux/store';

import { render, StrictMode, ThemeProvider, theme } from 'common';
import { App } from 'App';
import './index.css';

render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
