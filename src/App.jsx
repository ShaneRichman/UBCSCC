import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import NavList from "./navList.jsx";
import TopHeader from './topHeader.jsx';
import CurrentPage from './pages/currentPage.jsx';
import Sponsors from './sponsors.jsx';
import './App.css';

class App extends Component {

  onSignup = (info) => {
    fetch(`/signup`,{
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        body: JSON.stringify(info),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        this.setState({loggedIn: true})
        return res;
      }).catch(err => err);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavList />
          <TopHeader />
          <CurrentPage />
          <Sponsors />
        </div>
      </Router>
    );
  }
}
export default App;