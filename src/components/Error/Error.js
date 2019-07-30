import React from 'react';
import './Error.css';
import { Link } from 'react-router-dom';
import confused from '../../images/030-space-3.svg';

const Error = () => {
    return (
        <section>
            <h2 className='page-not-found'>404 ERROR: Stars not aligned</h2>
            <img src={confused} alt='uh-oh' className='error-planet'/>
            <Link to='/'>
                <button 
                    className='start-over-btn'>
                        Start Over
                </button>
            </Link>
        </section>
    );
};

export default Error;