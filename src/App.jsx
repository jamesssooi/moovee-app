import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import thunk from 'redux-thunk'
import rootReducer from 'reducers'

// Component imports
import Root from 'components/Root'
import Home from 'screens/Home'
import Movie, { onEnterMoviePage } from 'screens/Movie'

// Create redux store
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

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
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={Root}>
            {/* Homepage */}
            <IndexRoute component={Home} />

            {/* Movies */}
            <Route path="/movies">
              <IndexRoute component={CurrentRoute} />
              <Route
                path="/movies/:movieId"
                component={Movie}
                onEnter={onEnterMoviePage(store)}
              >
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
      </Provider>
    )
  }
}

export default App
