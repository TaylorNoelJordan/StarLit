import React from 'react';
import AstroSign from '../AstroSign/AstroSign'
import './HoroscopeDetails.css'

const HoroscopeDetails = () => {
    return (
        <section className='horoscope-details-display'>
            <AstroSign />
        </section>
    )
}

export default HoroscopeDetails;