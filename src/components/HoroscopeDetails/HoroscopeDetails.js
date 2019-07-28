import React from 'react';
import AstroSign from '../AstroSign/AstroSign';
import { connect } from 'react-redux';
import { loadComplete } from '../../actions'
import './HoroscopeDetails.css';

const HoroscopeDetails = (props) => {
    const { sign, name, dateRange, message, isLoading } = props;
    const loadingGif = 'https://media2.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif';
    const loading = (
      <section className="loading-gif-container">
        <img src={loadingGif} alt="loading-gif" className="loading-gif" />
      </section>
    );
    return (
        <section className='horoscope-details-display'>
        {/* {isLoading && loading} */}
            <AstroSign 
                sign={sign}
                dateRange={dateRange}
            />
            <article className='horoscope-details'>
            <h2>A-yo {name},</h2>
                <p>{message}</p>
            </article>
        </section>
    )
}

const mapStateToProps = state => ({
    sign: state.user.sign,
    name: state.user.name,
    dateRange: state.user.date_range,
    message: state.user.description,
    isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
  endLoading: () => dispatch(loadComplete())
})

export default connect(mapStateToProps, mapDispatchToProps)(HoroscopeDetails);