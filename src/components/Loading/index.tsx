import React from 'react';

// import './style.css';

import gif from '../../assets/img/loading.gif';

function Loading() {
    return (
        <div className="d-flex justify-content-center align-items-center loading">
            <img src={gif} alt="Loading" style={{maxWidth:"100%"}}/>
        </div>
    );
}

export default Loading;
