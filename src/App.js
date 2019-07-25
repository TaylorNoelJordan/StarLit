import React from 'react';
import './App.css';
import HoroscopeForm from './HoroscopeForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {}
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Twinkle, twinkle, little star, point me to the nearest bar.</h3>
        </header>
        <HoroscopeForm />
      </div>
    );

  }
}

export default App;
