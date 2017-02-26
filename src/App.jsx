import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import thunk from 'redux-thunk'
import rootReducer from 'reducers'
import smoothScroll from 'smooth-scroll'

// Component imports
import Root from 'components/Root'
import Home, { onEnterHomePage } from 'screens/Home'
import Movie, { onEnterMoviePage } from 'screens/Movie'
import { BookConfirmation, BookSuccess, onEnterConfirmationPage, onEnterSuccessPage } from 'screens/Book'

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
        <Router history={hashHistory} onUpdate={() => smoothScroll.animateScroll(0)}>
          <Route path="/" component={Root}>
            {/* Homepage */}
            <IndexRoute component={Home} onEnter={onEnterHomePage(store)} />

            {/* Movies */}
            <Route path="/movies">
              <IndexRoute component={CurrentRoute} />
              <Route
                path="/movies/:movieId"
                onEnter={onEnterMoviePage(store)}
              >
                <IndexRoute component={Movie} />
                <Route
                  path="/movies/:movieId/book/:movieSessionId"
                  onEnter={onEnterConfirmationPage(store)}
                >
                  <IndexRoute component={BookConfirmation} />
                  <Route
                    path="success"
                    component={BookSuccess}
                    onEnter={onEnterSuccessPage(store)}
                  />
                </Route>
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
