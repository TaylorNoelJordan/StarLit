import React from 'react';
import AstroSign from '../AstroSign/AstroSign';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadComplete } from '../../actions'
import './HoroscopeDetails.css';

export const HoroscopeDetails = (props) => {
    const yesMessage = (
            <>
                <p>The stars have aligned and the heavens have parted! The cosmos give permission for an evening of boozy indulgence, 
                    with the condition that the vibes stay as high as possible. Stay safe and have fun! 
                    Need some advice on what to wear and who to link up with?</p>
                    <Link to='/details'>YASSSS</Link>
            </>
    )

    const noMessage = (
            <p>Outlook not so good. Looks like the planetary alignment is calling for a little more detox, a little less retox. 
                Take tonight as an opportunity to tune inward, face that scary stuff you’ve been putting off, do a face mask and 
                get some deep sleep. Enjoy a night in and check back tomorrow.</p>
    )

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
            <h2 className='results-heading'>The Verdict:</h2>
                {yesMessage}
            </article>
        </section>
    )
}

export const mapStateToProps = state => ({
    sign: state.user.sign,
    name: state.user.name,
    dateRange: state.user.date_range,
    message: state.user.description,
    isLoading: state.isLoading
});

export const mapDispatchToProps = dispatch => ({
  loadComplete: () => dispatch(loadComplete())
})

export default connect(mapStateToProps, mapDispatchToProps)(HoroscopeDetails);