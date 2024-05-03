import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'core-js'
import NewState from './views/marketAnalytics/context/NewState'
import App from './App'
import store from './store'
import JsonState from './views/global context/JsonState'
createRoot(document.getElementById('root')).render(
  <JsonState>
  <NewState>
  <Provider store={store}>
    <App />
  </Provider>,
  </NewState>
  </JsonState>
)
