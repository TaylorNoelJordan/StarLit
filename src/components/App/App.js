import React from 'react';
import './App.css';
import HomePage from '../HomePage/HomePage';
import HoroscopeForm from '../HoroscopeForm/HoroscopeForm';
import HoroscopeDetails from '../HoroscopeDetails/HoroscopeDetails';
import { Route } from 'react-router-dom';



class App extends React.Component {
  render() {
    return (
      <div className="App stars">
      <div className='twinkling'>
        <Route exact path ='/' render={() => <HomePage />} />
        <Route exact path='/info' render ={() => <HoroscopeForm />} />
        <Route exact path='/horoscope' render={() => <HoroscopeDetails />} />
        <h1 className='App-title'>StarLit</h1>
        <div className='disclaimer'>
        <p>Twinkle twinkle, little star, you better not be taking your car.</p>
        <p>* Please party responsibly. *</p>
        </div>
      </div>
      </div>
    );

  }
}

export default App;
