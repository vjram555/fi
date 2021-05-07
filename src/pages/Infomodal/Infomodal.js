import React from "react";
import { AiFillBell,AiFillSetting } from "react-icons/ai";
import { HiOutlineLogout } from "react-icons/hi";

const Infomodal = ({ close }) => {
  return (
    <div >
      <div  className="dropdown-content"  onClick={() => close()}>
                    <div className="p-20">
                        <div className="mb-15">
                            <div><b>Institution Number</b></div>
                            <div>1111019191</div>
                        </div>
                        <div>
                            <div><b>Last Login</b></div>
                            <div>12/02/2021 at 9.02 AM EST</div>
                        </div>
                    </div>
                    <div className="p-20 settings-content">
                        <div className="mb-15 settings-list">
                            <div className="list-logo"><AiFillBell/></div>
                            <div>Lorem Ipsum</div>
                        </div>
                        <div className="settings-list">
                            <div className="list-logo"><AiFillSetting /></div>
                            <div>Settings</div>
                        </div>
                    </div>
                    <div className="p-20 settings-list">
                        <div className="list-logo"><HiOutlineLogout /></div>
                        <div>Log Out</div>
                    </div>
                </div>
                
    </div>
  );
};

export default Infomodal;
