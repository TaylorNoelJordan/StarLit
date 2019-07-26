import React from 'react';
import './AstroSign.css'
// import '../../images'

const AstroSign = ({sign, dateRange}) => {
    const img = `../../images/${sign}.svg`
    return (
        <>
        <img src={img} alt='astro sign symbol' className='astro-symbol'/>
        <p>{dateRange}</p>
        </>
    )
}

export default AstroSign;