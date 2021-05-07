import React, { useState } from 'react';
import "./SortingWithLayout.css"
import { BsFillGridFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";

const SortingWithLayout = (props) => {
    
    return (  
        <div className="sorting-with-layout">
            <div>
                SORT
            </div>
            <div className="layout">
                <div  className={"grid-btn " + (props.grid ? 'add-opacity' : '')} onClick={()=> props.parentCallback(true)} > <BsFillGridFill style={{width:25,height:25}}/></div>
                <div  className={"list-btn " + (props.grid ? '' : 'add-opacity')} onClick={()=> props.parentCallback(false)} > <FaThList style={{width:25,height:25}}/></div> 
            </div>
        </div>
    );
}
 
export default SortingWithLayout;