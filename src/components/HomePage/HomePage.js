import React from 'react';
import { Link } from 'react-router-dom';
import unlock from '../../images/unlock-dribbble.png'
import FadeIn from 'react-fade-in';
import '../App/responsive.css'

const HomePage = () => {
    return (
        <main className='home-page'>
            <FadeIn>
            <div className='home-page-heading'>
                <h3>Star light, star bright, shall I rage with my friends tonight?</h3>
            </div>
          <img src={unlock} alt='universe through a keyhole' className='home-page-img'/>
          <Link to='/info'><button className='home-page-btn'>Enter...</button></Link>
        </FadeIn>
        </main>
    )
}

export default HomePage;