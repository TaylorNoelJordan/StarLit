import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Details.css';

export const Details = (props) => {
    const { time, color, mood, compatibility } = props
    return (
        <section className="yes-details">
            <h3 className='yes-details-topic'>Tonight's feel: {mood}</h3>
            <h3 className='yes-details-topic'>Color to wear: {color}</h3>
            <h3 className='yes-details-topic'>Time you should go out: {time}</h3>
            <h3 className='yes-details-topic'>Sign to link up with (friends or more than friends 😈): {compatibility}</h3>
            <Link to='/'>
                <button>Start Over</button>
            </Link>
        </section>
    )
}

export const mapStateToProps = state => ({
    time: state.user.lucky_time,
    color: state.user.color,
    mood: state.user.mood,
    compatibility: state.user.compatibility
})

export default connect(mapStateToProps)(Details);