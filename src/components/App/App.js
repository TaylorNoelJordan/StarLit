import React from 'react';
import HomePage from '../HomePage/HomePage';
import HoroscopeForm from '../../containers/HoroscopeForm/HoroscopeForm'
import HoroscopeDetails from '../../containers/HoroscopeDetails/HoroscopeDetails';
import Details from '../../containers/Details/Details'
import Error from '../Error/Error'
import { Route, Switch } from 'react-router-dom';
import './responsive.css'
import './App.css';



class App extends React.Component {
  render() {
    return (
      <div className="App stars">
      <div className='twinkling'>
      <Switch>
        <Route exact path ='/' render={() => <HomePage />} />
        <Route exact path='/info' render ={() => <HoroscopeForm />} />
        <Route exact path='/horoscope' render={() => <HoroscopeDetails />} />
        <Route exact path='/details' render={() => <Details />} />
        <Route render={Error} />
      </Switch>
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
