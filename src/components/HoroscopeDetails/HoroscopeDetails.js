import React from 'react';
import AstroSign from '../AstroSign/AstroSign';
import { connect } from 'react-redux';
import './HoroscopeDetails.css';

const HoroscopeDetails = (props) => {
    console.log(props)
    const { sign, name, dateRange, message } = props;
    return (
        <section className='horoscope-details-display'>
            <AstroSign 
                sign={sign}
                dateRange={dateRange}
            />
            <article className='horoscope-details'>
            <h2>Dearest {name},</h2>
                <p>{message}</p>
            </article>
        </section>
    )
}

const mapStateToProps = state => ({
    sign: state.user.sign,
    name: state.user.name,
    dateRange: state.user.date_range,
    message: state.user.description
})

export default connect(mapStateToProps)(HoroscopeDetails);