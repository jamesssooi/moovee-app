import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute,
         hashHistory, browserHistory
} from 'react-router'
import Nav from 'components/Nav';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Root}>
          <Route path='/book' component={Book} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

class Root extends Component {
  render() {
    return (
      <div>
        <Nav />
        { this.props.children }
      </div>
    )
  }
}

const NotFound = () => <h1>404 Not Found</h1>
const Book = () => <h1>Hello from Book</h1>

export default App