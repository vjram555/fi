import React, { useState, useEffect } from 'react';
import './Channels.css';
import { BsArrowRightShort,BsFillGridFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { FaThList } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { updateSelectedChannels, selectedChannelsList } from '../../redux';



const Data = [{id:1,selected:false},{id:2,selected:false},{id:3,selected:false}
    ,{id:4,selected:false},{id:9,selected:false},{id:10,selected:false},
    {id:5,selected:false},{id:7,selected:false}
    ,{id:6,selected:false},{id:8,selected:false}];
const Channels = (props) => {
    console.log(props,'--props')
    const {channelData} = props;
    let history = useHistory();
    const [grid,setGrid] = useState(true);
    const [list,setList] = useState([]);
    const [selectedCount,setselectedCount] = useState(0);

    useEffect(() => {
        let obj = {selected: false};
        let objArray = channelData.allChannelList.map((d) => {
            Object.assign(obj, d);
            return d;
        })

        setList(objArray);

        // document.title = `You clicked ${count} times`;
      }, []);

    function handleClick() {
        history.push("/list");
      }

    function handleRedirect() {
        history.push("/create");
    }
    const getCheckedCard = (e,value) => {
        console.log(e.target.checked,'===',value)
        let array = [...list];
        
        if(e.target.checked){
            array.map((v)=>{
                if(v.channelName == value.channelName){
                    v.selected = true;
                    return v;
                }
            })
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
        const result = array.filter(word => word.selected == true);
        props.updateSelectedChannels(result.length);
        props.selectedChannelsList(result);
        console.log(result,'--rrrrr')
        console.log(array,'----list',list)

    }
    return (
    <div className="channel-list-container">
        <div className="channel-selection">
    <div className="channel-count">Select Channels ({channelData.selectedChannel})</div>
            <div className="continue-btn" onClick={handleClick}><div>CONTINUE</div><BsArrowRightShort style={{width:35,height:35}} /></div>
        </div>
        <div className="channel-border"></div>
        <div className="channel-selection">
            <div className="sorting-channel">SORT A-Z</div>
            <div className="btnContainer">
                <div  className={"grid-btn " + (grid ? 'add-op' : '')} onClick={()=> setGrid(true)} > <BsFillGridFill style={{width:25,height:25}}/></div>
                <div  className={"list-btn " + (grid ? '' : 'add-op')} onClick={()=> setGrid(false)} > <FaThList style={{width:25,height:25}}/></div> 
            </div>
        </div>
        
        <div className="card-container">
            <div className={ (grid ? 'new-channel' : 'new-channel-list')}
             onClick={handleRedirect}><div className={'add-channel-flexbox ' + (!grid && 'mf-25' )}>
                 <div className="add-channel-btn" onClick={handleRedirect}>
                     <AiOutlinePlus/></div> Add New Channel</div>
                     </div>
            {list.map((val) => <div className={ (grid ? 'show card' : 'hidden border-raduis') + (val.selected ? ' bg-blue' : ' bg-light')}>
            {grid && 
                <div className="container">
                <h4><b>Channel {val.channelName}</b></h4> 
                {/* <p>Card Designer</p>  */}
                <input type="checkbox" checked={val.selected} onChange={(e)=> getCheckedCard(e,val)}></input>
            </div>}
            {!grid && <div className="container-list-view">
                <input className="mf-25" type="checkbox" checked={val.selected} onChange={(e)=> getCheckedCard(e,val)}></input>
                <h4 className="mf-25"><b>Channel {val.channelName}</b></h4> 
                {/* <p>Card Designer</p>  */}
            </div>}
            </div>)}
            
        </div>
    </div>
    );
}
 
// export default Channels;

const mapStateToProps = state => {
    return {
      channelData: state.channel
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        updateSelectedChannels: (data) => dispatch(updateSelectedChannels(data)),
        selectedChannelsList: (data) => dispatch(selectedChannelsList(data))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Channels);
