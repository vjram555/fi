import React, { useState, useEffect } from 'react';
import './Landing.css';
import Channels from '../Channels/Channels';
import Header from '../Header/Header';
const Landing = () => {
    
    return (
    <div>
        <Header />
        <Channels />
       
    </div>
    );
}
 
export default Landing;