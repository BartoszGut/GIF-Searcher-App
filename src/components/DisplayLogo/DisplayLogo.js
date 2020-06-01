import React from 'react';
import Logo from '../../images/logo.png';

const DisplayLogo = () => {
    return (
        <div className="logo-container">
            <img src={Logo} alt="" />
        </div>
    );
}

export default DisplayLogo;