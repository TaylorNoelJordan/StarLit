import React from 'react';

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

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <form className='horoscope'>
            <label for='name'>What's yo name?</label>
            <input type='text' name='name' onChange={this.handleChange} value={this.state.name} />
            <label for='sign'>What's yo sign?</label>
            <select name='sign' value={this.state.sign} onChange={this.handleChange}>
                <option>Choose One...</option>
                <option value='aries'>Aries (Mar 21-Apr 19)</option>
                <option onChange={this.handleChange} value='taurus'>Taurus (Apr 20-May 20)</option>
                <option onChange={this.handleChange} value='gemini'>Gemini (May 21-June 20)</option>
                <option onChange={this.handleChange} value='cancer'>Cancer (June 21-July 22)</option>
                <option onChange={this.handleChange} value='leo'>Leo (July 23-Aug 22)</option>
                <option onChange={this.handleChange} value='virgo'>Virgo (Aug 23-Sept 22)</option>
                <option onChange={this.handleChange} value='libra'>Libra (Sept 23-Oct 22)</option>
                <option onChange={this.handleChange} value='scorpio'>Scorpio (Oct 23-Nov 21)</option>
                <option onChange={this.handleChange} value='sagittarius'>Sagittarius (Nov 22-Dec 21)</option>
                <option onChange={this.handleChange} value='capricorn'>Capricorn (Dec 22-Jan 19)</option>
                <option onChange={this.handleChange} value='aquarius'>Aquarius (Jan 20-Feb 18)</option>
                <option onChange={this.handleChange} value='pisces'>Pisces (Feb 19-Mar 20)</option>
            </select>
            <button className='horoscope-form-submit' onClick={e => this.handleSubmit(e)}></button>

            </form>
        )
    }
}

export default HoroscopeForm;