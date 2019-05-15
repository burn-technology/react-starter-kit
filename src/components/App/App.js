import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return(
      <div className="app">
        <p>this is my starter kit react app with plop</p>
      </div>
    ) 
  }
}

App.propTypes = {
  
};

export default App;