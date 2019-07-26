import React from 'react';
import { postSign } from '../../utilz/apiCalls';
import { connect } from 'react-redux';
import { setUser, hasErrored } from '../../actions'
import { Link } from 'react-router-dom';
import './HoroscopeForm.css'

class HoroscopeForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            sign: '',
            error: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    checkInputs = () => {
        if(this.state.name || this.state.value === '') {
            this.setState({ error: 'This input is required' })
        } else {
            this.setState({ error: ''})
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { sign, name } = this.state;
        this.checkInputs()
        try {
            let user = await postSign(sign);
            // console.log(user)
            this.props.setUser({...user, sign: sign, name: name})
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
                    <span className='errorMessge'>{this.state.error}</span>
                    <label for='sign'>What's yo sign?</label>
                    <span className='errorMessge'>{this.state.error}</span>
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
                    <button className='horoscope-form-submit' 
                        onClick={e => this.handleSubmit(e)}>
                        <Link to='/horoscope'>
                            Skeddit!
                        </Link>
                    </button>
                </form>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user)),
    hasErrored: errorMsg => (hasErrored(errorMsg))
})

export default connect(mapStateToProps, mapDispatchToProps)(HoroscopeForm);