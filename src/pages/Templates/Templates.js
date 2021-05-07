import React, { useState, useEffect } from 'react';
import './Templates.css';
import Header from '../Header/Header';
import TemplateList from '../TemplateList/TemplateList';
const Templates = () => {
    
    return (
    <div>
        <Header />
        <TemplateList/>

        {/* <Channels /> */}
       
    </div>
    );
}
 
export default Templates;