import React from 'react';
import './Error.css'
import confused from '../../images/030-space-3.svg'

const Error = () => {
    return (
        <section>
            <h2 className='page-not-found'>404 ERROR: Stars not aligned</h2>
            <img src={confused} alt='uh-oh' className='error-planet'/>
        </section>
    );
};

export default Error;