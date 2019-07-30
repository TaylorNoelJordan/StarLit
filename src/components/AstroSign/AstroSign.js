import React from 'react';
import './AstroSign.css'
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import sun from '../../images/039-sun.svg;'
// let images = require.context('../../../signImages', true);



export const AstroSign = (props) => {
    const { sign, dateRange } = props
    const img_src= images(`./${sign}.svg`)
    const sun = images('./039-sun.svg')
    return (
        <>
        <img src={sign ? img_src : sun} alt='astro sign symbol' className='astro-symbol'/>
        <p className='date-range'>{dateRange}</p>
        {!img_src && <Redirect to='/'/>}
        </>

    )
}

export const mapStateToProps = state => ({
    sign: state.user.sign,
    dateRange: state.user.date_range
})

export default connect(mapStateToProps)(AstroSign);