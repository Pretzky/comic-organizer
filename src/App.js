import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Comics from './Components/Comics/Comics';
import Settings from './Components/Settings/Settings';
import Download from './Components/Download/Download';

class App extends Component {
  state = {
    user: {
      comics: []
    }
  }

  setComics = newComics => {
    this.setState({ user: { comics: newComics } });
  }

  setUser = newUser => {
    this.setState({ user: newUser });
  }

  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Comics comics={this.state.user.comics} />
          </Route>
          <Route exact path="/settings">
            <Settings user={this.state.user} setComics={this.setComics} />
          </Route>
          <Route exact path="/download">
            <Download user={this.state.user} setUser={this.setUser} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
