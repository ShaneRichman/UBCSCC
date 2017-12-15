import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import TopHeader from './topHeader.jsx';
import CurrentPage from './pages/currentPage.jsx';
import Sponsors from './sponsors.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopHeader />
          <div>
            <CurrentPage />
            <Sponsors />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
