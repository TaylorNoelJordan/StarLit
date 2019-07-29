import React from 'react';
import './AstroSign.css'
import { connect } from 'react-redux';
import aries from '../../images/aries.svg'



const AstroSign = (props) => {
    const { sign, dateRange } = props
    // const img = `../../images/${sign}.svg`
    return (
        <>
        <img src={aries} alt='astro sign symbol' className='astro-symbol'/>
        <p className='date-range'>{dateRange}</p>
        </>
    )
}

const mapStateToProps = state => ({
    sign: state.user.sign,
    dateRange: state.user.date_range
})

export default connect(mapStateToProps)(AstroSign);