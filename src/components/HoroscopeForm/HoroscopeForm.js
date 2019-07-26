import React from 'react';
import{ postSign } from '../../../utilz/apiCalls';
import { connect } from 'react-redux';
import { setUser, hasErrored } from '../../actions'
import './HoroscopeForm.css'

class HoroscopeForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            sign: '',
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { sign } = this.state;
        try {
            let user = await postSign(sign);
            this.props.setUser(user)
        } catch ({ message }) {
            this.props.hasErrored(message)
        }
    }

    render() {
        return (
            <section className='horoscope-form-display'>
                <form className='horoscope-form'>
                    <label for='name'>What's yo name?</label>
                    <input type='text' className='horscope-form-input' name='name' onChange={this.handleChange} value={this.state.name} />
                    <label for='sign'>What's yo sign?</label>
                    <select name='sign' value={this.state.sign} onChange={this.handleChange} className='horoscope-form-input'>
                        <option>Choose One...</option>
                        <option value='aries'>Aries (Mar 21-Apr 19)</option>
                        <option value='taurus'>Taurus (Apr 20-May 20)</option>
                        <option value='gemini'>Gemini (May 21-June 20)</option>
                        <option value='cancer'>Cancer (June 21-July 22)</option>
                        <option value='leo'>Leo (July 23-Aug 22)</option>
                        <option value='virgo'>Virgo (Aug 23-Sept 22)</option>
                        <option value='libra'>Libra (Sept 23-Oct 22)</option>
                        <option value='scorpio'>Scorpio (Oct 23-Nov 21)</option>
                        <option value='sagittarius'>Sagittarius (Nov 22-Dec 21)</option>
                        <option value='capricorn'>Capricorn (Dec 22-Jan 19)</option>
                        <option value='aquarius'>Aquarius (Jan 20-Feb 18)</option>
                        <option value='pisces'>Pisces (Feb 19-Mar 20)</option>
                    </select>
                    <button className='horoscope-form-submit' onClick={e => this.handleSubmit(e)}>Skeddit!</button>
                </form>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(HoroscopeForm);