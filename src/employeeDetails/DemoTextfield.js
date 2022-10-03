import React,{useState}from 'react';
import {useSelector} from "react-redux";
function DemoTextfield() {
    const reducerData=useSelector((state)=>state.reducer.list);
    console.log("reducerData",reducerData)
    const [userName,setUserName]=useState({name:null});
    const handleChange=(e)=>{
        const {name,value}= e.target;
        setUserName({...userName,[name]:value})
    }
  return (
    <div className='container'>
    {reducerData.map((data)=>{
        const {fullname}=data;
        console.log("fullname",data)
        return(
            <p>{fullname}</p>
        )
    })}
    
        <input
            type="text"
            name='userName'
            value={reducerData.fullname}
            onChange={handleChange}
        />
    </div>
  )
}

export default DemoTextfield