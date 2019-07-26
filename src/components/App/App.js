import React from 'react';
import './App.css';
import HomePage from '../HomePage/HomePage';
import HoroscopeForm from '../HoroscopeForm/HoroscopeForm';
import HoroscopeDetails from '../HoroscopeDetails/HoroscopeDetails';
import { Route, Link } from 'react-router-dom';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">

         </header> */}
        <Route exact path ='/' render={() => <HomePage />} />
        <Route exact path='/info' render ={() => <HoroscopeForm />} />
        <Route exact path='/horoscope' render={() => <HoroscopeDetails />} />
        <h1 className='App-title'>StarLit</h1>
      </div>
    );

  }
}

export default App;
