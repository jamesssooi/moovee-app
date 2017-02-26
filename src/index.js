import 'css'

import 'es6-promise'
import React from 'react'
import ReactDOM from 'react-dom'
import smoothScroll from 'smooth-scroll'
import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

smoothScroll.init()
