import './ListTemplate.css';
import React, { useState,useEffect  } from 'react';

import { MdModeEdit,MdDelete } from "react-icons/md";

import { RiPushpin2Fill } from "react-icons/ri";

import { FaCopy } from "react-icons/fa";

const data = [{
  id:1,
  name:"Q2 User Account",
  desc:"It contains information about the Q2 users and account details",
  date:"04-26-2021"
},
{
  id:2,
  name:"Q2 Customer Details",
  desc:"It contains information about the Q2 customer and there details",
  date:"03-26-2021"
}];

function ListTemplate(props) {
  const [count, setCount] = useState(data);
  useEffect(() => {
    // setCount(data);
    console.log('count------',count)
  }, [count]);
  const deleteTemplate = (id) => {
    console.log(id,'----delete')
    let list = count.filter((v) => {return v.id != id});
    // data = list;
    console.log('list',list)
    setCount(list);
    console.log(count,'after')
  }
  const copyTemplate = (val) => {
    console.log(val,'----val')
    let value = {
      id:count.length + 1,
      name:val.name,
      desc:val.desc,
      date:val.date
    }
    data.push(value)
    const newArr = [...data];
    setCount(newArr);
    console.log(data,'--',count);
  }
  return (
    <div className="App">
      <h1>Third Party Tool </h1>
      
<table>
    <thead>
  <tr>
    <th>Data Mapping Template</th>
    <th>Template Descriptions</th>
    <th>Data Last Modified</th>
    <th></th>
  </tr>
  </thead>
  <tbody>
  {count.map((value) =>
  <tr key={value.id}>
  <td>{value.name}</td>
  <td>{value.desc}</td>
  <td>{value.date}</td>
  <td><div className="operations"><RiPushpin2Fill/><FaCopy onClick={() => copyTemplate(value)}/>
  <MdModeEdit/><MdDelete onClick={() => deleteTemplate(value.id)}/></div></td>
</tr>
  )}
  </tbody>
  {/* <tr>
    <td>Q2 User Account</td>
    <td>It contains information about the Q2 users and account details</td>
    <td>4-26-2021</td>
    <td><div className="operations"><RiPushpin2Fill/><FaCopy/><MdModeEdit/><MdDelete/></div></td>
  </tr>
  <tr>
    <td>Q2 Customer Details</td>
    <td>It contains information about the Q2 customer and there details</td>
    <td>3-26-2021</td>
    <td><div className="operations"><RiPushpin2Fill/><FaCopy/><MdModeEdit/><MdDelete/></div></td>
  </tr> */}
</table>
    </div>
  );
}

export default ListTemplate;
