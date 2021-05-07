import React, { useState, useEffect } from 'react';
import './TemplateList.css';
import { AiOutlineArrowLeft,AiOutlinePlus } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import Tabs from "../../components/Tabs";
import SortingWithLayout from "../../components/SortingWithLayout/SortingWithLayout";
import { CgDuplicate } from 'react-icons/cg';
import { connect } from 'react-redux';


const Data = [{id:1,selected:false,type:"Transaction",name:"Name of the Template",date:"10-10-21",channel:"Name of the Channel"},
{id:2,selected:false,type:"Customer",name:"Templates Name",date:"10-10-21",channel:"New Channel name"},
{id:3,selected:false,type:"Customer",name:"Templates Name",date:"10-10-21",channel:"New Channel name"}
  ,{id:4,selected:false,type:"Transaction",name:"Name of the Template",date:"10-10-21",channel:"Name of the Channel"},
  {id:9,selected:false,type:"Customer",name:"Templates Name",date:"10-10-21",channel:"New Channel name"},
  {id:10,selected:false,type:"Customer",name:"Templates Name",date:"10-10-21",channel:"New Channel name"},
  {id:5,selected:false,type:"Transaction",name:"Name of the Template",date:"10-10-21",channel:"Name of the Channel"},
  {id:7,selected:false,type:"Customer",name:"Templates Name",date:"10-10-21",channel:"New Channel name"}
  ,{id:6,selected:false,type:"Transaction",name:"Name of the Template",date:"10-10-21",channel:"Name of the Channel"},
  {id:8,selected:false,name:"Templates name",type:"Customer",channel:"New Channel name"}];

const TemplateList = (props) => {
      const [grid,setGrid] = useState(true);
      const [list,setList] = useState([]);
      const [indexval,setindexval] = useState();
      const [toggleInfoModal,settoggleInfoModal]= useState(false);

    let history = useHistory();
    function handleClick() {
        history.push("/");
    }

    useEffect(() => {
      let obj = {selected: false};
      let objArray = props.channelData.allChannelList.map((d) => {
          Object.assign(obj, d);
          return d;
      })
      console.log(props,'---ppp')
      setList(objArray);

      // document.title = `You clicked ${count} times`;
    }, []);

    const getInfo = (e,val,type) => {
      console.log(type,val,'----')
      document.getElementById(val.templateId).classList.remove("show-menu");

    }
    // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   console.log(event.target,'---event')
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     console.log(dropdowns,'----drop')
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show-menu')) {
//         openDropdown.classList.remove('show-menu');
//       }
//     }
//   }
// }
    const showhide =(val,index) => {
      console.log(index,'----index')
      setindexval(index);
      document.getElementById('overlay').classList.toggle('overlay-show');
      document.getElementById(val.templateId).classList.toggle("show-menu");
    }
    const getCheckedCard = (e,value) => {
      console.log(e.target.checked,'===')
      let array = [...list];
      
      if(e.target.checked){
          array.map((v)=>{
              if(v.channelName == value.channelName){
                  v.selected = true;
                  return v;
              }
          })
          
          // array.push(value);
          setList(array);

      }else {
          array.map((v)=>{
              if(v.channelName == value.channelName){
                  v.selected = false;
                  return v;
              }
          })
          setList(array);

     }
        console.log(array,'----list',list)

  }
    const  handleCallback = (childData) =>{
      setGrid(childData);
    }
    const closeDuplicate = () => {
      console.log('duplicat',indexval);
      let listObject = list[indexval];
      console.log(listObject,'--obj')
      if(listObject){
        document.getElementById('overlay').classList.remove('overlay-show');
        document.getElementById(listObject.id).classList.remove("show-menu");
      }
    }

    return (
    <div>
      <div className="overlay" id="overlay" onClick={() =>closeDuplicate()}></div>
       <div className="templates-channels">
           <div className="selected-channels-list">
               <div className="selected-channel-count" onClick={handleClick}>
                   <div><AiOutlineArrowLeft style={{width:20,height:20,marginRight:10}}/></div>SHOWING {props.channelData.selectedChannel} CHANNELS</div>
    {props.channelData.selectedChannelList?.map((l) =>
    <div className="channel-grid">CHANNELS {l.channelName}</div>)}
               
           </div>
           <div className="template-list">
             <div className="add-new-template"><div className="add-channel-btn"><AiOutlinePlus style={{fill:"white",width:20,height:20}}/></div>Create New</div>
              <Tabs>
                <div label="Custom Templates">
                  <SortingWithLayout grid={grid} parentCallback = {handleCallback}/>
                  <div className={"template-card-container" + (grid ? '' : ' mr-25')}>
                      {list && list.map((val,index) => <div className={ " " + (grid ? 'show-grid' : ' card-template-container hidden') + (val.selected ? ' bg-blue' : ' bg-light')}>
                         {!grid && <div className="template-container">
                      {/* <div className="fg-5 list-template-checkbox"><input className="form-check-input"  type="checkbox" checked={val.selected}
                       onChange={(e)=> getCheckedCard(e,val)}/></div> */}
                       <label class="container list-template-checkbox">
                    <input type="checkbox"  checked={val.selected} onChange={(e)=> getCheckedCard(e,val)}/>
                    <span class={"checkmark" + (val.selected ? ' ischecked':'')}></span>
                  </label>
                      <p className="fg-3"><b> {val.templateName}</b>
                      <div className="show-content">{val.templateDescription}</div></p> 
                      <p className="fg-15 color-gray">{val.targetDatabaseName}</p>
                      <p className="fg-25 color-gray">{val.channelName}</p>
                      <p className="fg-15 color-gray">{val.templateDateLastModified.substr(0, 10)}</p> 
                      <p className="dropdown fg-5 color-gray">
  <div className="dropbtn" onClick={()=>showhide(val,index)}><BsThreeDotsVertical/></div>
  <div id={val.templateId} className="dropdown-content">
  <a onClick={(e) => getInfo(e,val,'edit')}>Edit</a>
  <a onClick={(e) => getInfo(e,val,'copy')}>Copy</a>
  </div>
</p>
                      {/* <p className="fg-5 color-gray" onClick={()=> settoggleInfoModal(true)}><BsThreeDotsVertical/></p> */}
                      </div> }
                      {/* {toggleInfoModal && <div className="duplicate" onClick={()=> settoggleInfoModal(false)}>Duplicate</div>} */}
                      {grid && <div className="template-container-grid">
                      {/* <input className="fg-5" type="checkbox" checked={val.selected} /> */}
                      <div className="first">
                        <h4 className="template-title"><b> {val.templateName}</b></h4>
                        <div className="template-checkbox">
                          <input type="checkbox" checked={val.selected} onChange={(e)=> getCheckedCard(e,val)}/>
                        </div>
                      </div> 
                      <div className="first al"> 
                        <div className="name-container">
                        <div className="">{val.targetDatabaseName}</div>
                        <div className="">{val.channelName}</div>
                        <div className="">{val.templateDateLastModified.substr(0, 10)}</div> 
                        </div>
                        <div className="operation-tab">
                        <div ><BsThreeDotsVertical/></div>
                        </div>
                      </div>
                      {/* <p className="fg-5"><BsThreeDotsVertical/></p> */}
                      </div> }
                      </div>)}
                      
                  </div>
                </div>
                <div label="Started Templates">
                  <SortingWithLayout grid={grid} parentCallback = {handleCallback}/>
                  
                </div>
                <div label="Archived">
                  <SortingWithLayout grid={grid} parentCallback = {handleCallback}/>
                </div>
              </Tabs>
           </div>
       </div>
    </div>
    );
}
 
// export default TemplateList;

const mapStateToProps = state => {
  return {
    channelData: state.channel
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//       updateSelectedChannels: (data) => dispatch(updateSelectedChannels(data)),
//       selectedChannelsList: (data) => dispatch(selectedChannelsList(data))
//   }
// }

export default connect(
  mapStateToProps)(TemplateList);
