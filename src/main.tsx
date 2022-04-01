import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { MantineProvider } from '@mantine/core'
import { Provider } from 'react-redux'
import store from './lib/redux/store'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark',
          primaryColor: 'teal',
        }}
      >
        <App />
      </MantineProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
