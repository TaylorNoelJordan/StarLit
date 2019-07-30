import React from 'react';
import AstroSign from '../AstroSign/AstroSign';
import { Link, Redirect } from 'react-router-dom';
import { clearUser } from '../../actions';
import { connect } from 'react-redux';
import FadeIn from 'react-fade-in';
import PropTypes from 'prop-types';
import happyPlanet from '../../images/033-planet-7.svg';
import sadPlanet from '../../images/028-planet-4.svg';
import './HoroscopeDetails.css';

export const HoroscopeDetails = (props) => {
    const yesMessage = (
            <>
                <img src={happyPlanet} alt='smiling purple planet' className='verdict-planet'/>
                <p>The stars have aligned and the heavens have parted! The cosmos give permission for an evening of boozy indulgence, 
                    with the condition that the vibes stay as high as possible. Stay safe and have fun! 
                    Need some advice on what to wear and who to link up with?</p>
                    <Link to='/details' className='yasss-btn'>YASSSS</Link>
            </>
    )

    const noMessage = (
        <>
            <img src={sadPlanet} alt='sleeping purple planet' className='verdict-planet'/>
            <p>Outlook not so good. Looks like the planetary alignment is calling for a little more detox, a little less retox. 
                Take tonight as an opportunity to tune inward, face that scary stuff you’ve been putting off, do a face mask and 
                get some deep sleep. Enjoy a night in and check back tomorrow.</p>
        </>
    )

    const { name, message, verdict, clearUser } = props;
    return (
        <FadeIn>
            <section className='horoscope-details-display'>
                <AstroSign />
                <article className='horoscope-details'>
                <h2 className='results-heading'>A-yo {name},</h2>
                    <p>{message}</p>
                <h2 className='results-heading'>The Verdict:</h2>
                    {verdict ==='positive' ? yesMessage : noMessage}
                </article>
                {!name && <Redirect to='/'/>}
                <Link to='/'>
                    <button 
                        className='start-over-btn'
                        onClick={clearUser}>
                            Start Over
                    </button>
                </Link>
            </section>
        </FadeIn>
    )
}

export const mapStateToProps = state => ({
    user: state.user,
    name: state.user.name,
    message: state.user.description,
    verdict: state.verdict
});

export const mapDispatchToProps = dispatch => ({
    clearUser: () => dispatch(clearUser())
})


HoroscopeDetails.propTypes = {
    user: PropTypes.object,
    name: PropTypes.string,
    message: PropTypes.string,
    verdict: PropTypes.string
}



export default connect(mapStateToProps, mapDispatchToProps)(HoroscopeDetails);