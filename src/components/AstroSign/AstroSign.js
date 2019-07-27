import React from 'react';
import './AstroSign.css'
// import '../../images'
import aries from '../../images/aries.svg'

const AstroSign = ({sign, dateRange}) => {
    // const img = `/images/${sign}.svg`
    // const img = '../../images/aries.svg'
    return (
        <>
        <img src={aries} alt='astro sign symbol' className='astro-symbol'/>
        <p className='date-range'>{dateRange}</p>
        </>
    )
}

export default AstroSign;