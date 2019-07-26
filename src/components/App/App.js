import React from 'react';
import './App.css';
import HoroscopeForm from '../HoroscopeForm/HoroscopeForm';
import unlock from './images/unlock-dribbble.jpg'
import venus from './images/038-venus.svg';
import purplePlanet from './images/018-planets.svg';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={venus} alt='purple planet icon' className='icon'/> */}
          <h3>Twinkle, twinkle, little star, point me to the nearest bar.</h3>
          {/* <img src={purplePlanet} alt='purple planet icon' className='icon'/> */}
        </header>
        <main className='home-page'>
          {/* <img src={unlock} alt='universe through a keyhole' className='home-page-img'/> */}
          {/* <button className='home-page-btn'>Enter...</button> */}
        </main>
        <HoroscopeForm />
        <h1 className='App-title'>StarLit</h1>
      </div>
    );

  }
}

export default App;
