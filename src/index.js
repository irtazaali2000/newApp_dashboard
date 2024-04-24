import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'core-js'
import NewState from './views/marketAnalytics/context/NewState'
import App from './App'
import store from './store'

createRoot(document.getElementById('root')).render(
  <NewState>
  <Provider store={store}>
    <App />
  </Provider>,
  </NewState>
)
