import React from 'react';
import './Loading.css'

const Loading = () => {
    const loadingGif = 'https://media2.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif';
    return (
        <section className="loading-gif-container">
        <img src={loadingGif} alt="loading-gif" className="loading-gif" />
      </section>
    )
}

export default Loading