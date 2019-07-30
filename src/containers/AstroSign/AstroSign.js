import React from 'react';
import './AstroSign.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const AstroSign = (props) => {
    const { sign, dateRange } = props
    const sun = 'sun'
    return (
        <>
        <img src={require(`../../../signImages/${sign || sun}.svg`)} alt='astro sign symbol' className='astro-symbol'/>
        <p className='date-range'>{dateRange}</p>
        </>

    )
}

export const mapStateToProps = state => ({
    sign: state.user.sign,
    dateRange: state.user.date_range
})

AstroSign.propTypes = {
    sign: PropTypes.string,
    dateRange: PropTypes.string
}

export default connect(mapStateToProps)(AstroSign);