import React from 'react';
import { connect } from 'react-redux';
import { clearUser } from '../../actions'
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';
import './Details.css';

export const Details = (props) => {
    const { time, color, mood, compatibility, clearUser } = props
    return (
        <section className="yes-details">
            <FadeIn>
            <h3 className='yes-details-topic'>Tonight's feel:</h3>
            <p className='yes-result'>{mood}</p>
            <h3 className='yes-details-topic'>Color to wear:</h3>
            <p className='yes-result'>{color}</p>
            <h3 className='yes-details-topic'>Time you should go out:</h3>
            <p className='yes-result'>{time}</p>
            <h3 className='yes-details-topic'>Sign to link up with (friends or more than friends <span role='img'>😈</span>):</h3>
            <p className='yes-result'>{compatibility}</p>
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

export default connect(mapStateToProps)(Details);