import React, { useState,useRef,useEffect } from 'react';
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import Infomodal from "../Infomodal/Infomodal"
import { CgProfile } from "react-icons/cg";

const Header = () => {
    const modalRef = useRef();
    const [toggleInfoModal,settoggleInfoModal]= useState(false);
    useOnClickOutside(modalRef, () => settoggleInfoModal(false));

  function useOnClickOutside(modalRef, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (
          !modalRef.current ||
          modalRef.current.contains(event.target)
        ) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [modalRef, handler]);
  }
    return ( 
        <div className="header">
            <div className="title-container">
                <div className="title">THIRD-PARTY
                <span className="subtitle">TOOL</span></div>
            </div>
            <div>
            <div className="search-container">
                <input className="search-input" type="text" placeholder="Search" name="search" />
                <button type="btn" className="search-btn"><FaSearch/></button>
            </div>
            </div>
            <div className="user-info-container">
                <div className="user-info">
                    <div><b>Vijayaraman</b></div>
                    <div className="user-role">User</div>
                </div>
                <div className="dropdown">
                <div className="profile-pic" onClick={()=> settoggleInfoModal(true)}></div>
                </div>


                {toggleInfoModal && ( <div ref={modalRef}>
            <Infomodal
              close={() => settoggleInfoModal(false)
              }
            />
            </div>
          )}

            </div>
        </div>
     );
}
 


export default Header;