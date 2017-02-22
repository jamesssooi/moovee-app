import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// Component imports
import Root from 'components/Root'
import Home from 'screens/Home'

const CurrentRoute = (props) => {
  return (
    <div>
      <span>You are at {props.location.pathname}</span>
      {Object.keys(props.params).length > 0 &&
        <div>
          <ul>
            {Object.keys(props.params).map((key, index) =>
              <li key={index}><strong>{key}</strong>: {props.params[key]}</li>
            )}
          </ul>
        </div>
      }
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Root}>
          {/* Homepage */}
          <IndexRoute component={Home} />

          {/* Movies */}
          <Route path="/movies">
            <IndexRoute component={CurrentRoute} />
            <Route path="/movies/:movieId" component={CurrentRoute}>
              <IndexRoute component={CurrentRoute} />
              <Route path="/movies/:movieId/purchase" component={CurrentRoute} />
            </Route>
          </Route>

          {/* Login */}
          <Route path="/login" component={CurrentRoute} />

          {/* User Account */}
          <Route path="/account" component={CurrentRoute} />
        </Route>
      </Router>
    )
  }
}

export default App
