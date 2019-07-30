import React from 'react';
import { connect } from 'react-redux';
import { clearUser } from '../../actions'
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cheers from '../../images/049-cheers.svg'
import './Details.css';

export const Details = (props) => {
    const { time, color, mood, compatibility, clearUser } = props
    return (
        <section className="yes-details">
            <FadeIn>
                {/* <img src={cheers} alt='clinking champagne glasses' className='champagne-img'/> */}
                <h3 className='yes-details-topic'>Tonight's feel:</h3>
                <p className='yes-result'>{mood}</p>
                <h3 className='yes-details-topic'>Color to wear:</h3>
                <p className='yes-result'>{color}</p>
                <h3 className='yes-details-topic'>Time you should go out:</h3>
                <p className='yes-result'>{time}</p>
                <h3 className='yes-details-topic'>Sign to link up with (friends or more than friends <span role='img'>😈</span>):</h3>
                <p className='yes-result'>{compatibility}</p>
                <img src={cheers} alt='clinking champagne glasses' className='champagne-img'/>
                <h4>Cheers, boo</h4>
                <Link to='/'>
                    <button 
                        className='start-over-btn'
                        onClick={clearUser}>
                            Start Over
                    </button>
                </Link>
        </FadeIn>
        </section>
    )
}

export const mapStateToProps = state => ({
    time: state.user.lucky_time,
    color: state.user.color,
    mood: state.user.mood,
    compatibility: state.user.compatibility
});

export const mapDispatchToProps = dispatch => ({
    clearUser: () => dispatch(clearUser())
})

Details.propTypes = {
    time: PropTypes.string,
    color: PropTypes.string,
    mood: PropTypes.string,
    compatibility: PropTypes.string
}

export default connect(mapStateToProps)(Details);