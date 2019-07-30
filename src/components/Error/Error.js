import React from 'react';
import './Error.css';
import { Link } from 'react-router-dom';
import confused from '../../images/030-space-3.svg';

const Error = () => {
    return (
        <section className='page-not-found'>
            <h2>404 ERROR: Stars not aligned on this page...</h2>
            <img src={confused} alt='uh-oh' className='error-planet'/>
            <Link to='/'>
                <button 
                    className='go-back-btn'>
                        Go Back
                </button>
            </Link>
        </section>
    );
};

export default Error;