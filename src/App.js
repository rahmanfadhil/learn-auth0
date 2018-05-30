import React, { Component } from 'react';
class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    console.log(this.props)
    return (
      <div>
        <h1>Hello World</h1>
        {
          !isAuthenticated() && (
            <button
              onClick={this.login.bind(this)}
            >
              Log In
                  </button>
          )
        }
        {
          isAuthenticated() && (
            <button
              onClick={this.logout.bind(this)}
            >
              Log Out
                  </button>
          )
        }
      </div>
    );
  }
}

export default App;
