import React, { useEffect, useState } from 'react';
import { Link, useNavigate,useParams } from 'react-router-dom';
import "./EmployeeForm.css";
import ShowData from './ShowData';
import {useDispatch,useSelector} from "react-redux";
import {editEmployeeInputValue} from "../actions";

function EmployeeForm() {
    const employeeID=Date.now();
    const initialValue={employeeID:employeeID,fullname:"",dob:"",gender:"",hobbies:"",paddress:"",laddress:"",
    city:"",state:"",pincode:"",pan:"",noffm:"",fdob:"",fgender:"",rwfb:""};
    const [employeeDetails,setEmployeeDetails]=useState(initialValue);
    console.log("employeeDetails",employeeDetails)
    const [error,setError]=useState({});
    const navigate=useNavigate();
    const { id } = useParams();
    console.log("idFromEditOptionuseParam",id)
    const [gender,setGender]=useState();
    const list=useSelector((state)=>state.reducer.list);
    const dispatch=useDispatch();
const handleChange=(e)=>{
    const {name,value}=e.target;
    setEmployeeDetails({...employeeDetails,[name]:value})
    // console.log(employeeDetails);
}

const isValidObject = () => {   
    if(!employeeDetails.fullname ||Number(employeeDetails.fullname)){
        return false;
    }
    else if(!employeeDetails.dob){
        return false;
    }
    else if(!employeeDetails.gender||employeeDetails.gender=="Gender"){
        return false;
    }
    else if(!employeeDetails.paddress){
        return false;
    }
    else if(!employeeDetails.laddress){
        return false;
    }
    else if(!employeeDetails.city){
        return false;
    }
    else if(!employeeDetails.state){
        return false;
    }
    else if(!employeeDetails.pincode){
        return false;
    }
    else if(!employeeDetails.pan){
        return false;
    }
    else if(!employeeDetails.noffm){
        return false;
    }
    else if(!employeeDetails.fdob){
        return false;
    }

    else if(!employeeDetails.fgender||employeeDetails.fgender=="Gender"){
        return false;
    }
    else if(!employeeDetails.rwfb){
        return false;
    }
    return true;
}


const EventHandle=(e)=>{
    e.preventDefault();
    setError(validate(employeeDetails));
    if(isValidObject()===true){
        const empGetValueFormLS=JSON.parse(localStorage.getItem("employeeDetails"));
        if(empGetValueFormLS){
            empGetValueFormLS.push(employeeDetails);
            localStorage.setItem("employeeDetails",JSON.stringify(empGetValueFormLS));
        }
        else{
            localStorage.setItem("employeeDetails",JSON.stringify([employeeDetails]));
        }
        setEmployeeDetails(initialValue);
        navigate("/showdata");

    }
}

const validate=(employeeDetails)=>{
    const showMessage={};
    if(!employeeDetails.fullname ||Number(employeeDetails.fullname)){
        showMessage.fullname="please enter employee name"
    }
    else if(!employeeDetails.dob){
        showMessage.dob="please enter date of birth"
    }
    else if(!employeeDetails.gender||employeeDetails.gender=="Gender"){
        showMessage.gender="please enter correct gender"
    }
    else if(!employeeDetails.paddress){
        showMessage.paddress="plase enter your permanent address"
    }
    else if(!employeeDetails.laddress){
        showMessage.laddress="please enter your Local Address"
    }
    else if(!employeeDetails.city){
        showMessage.city="please enter your city name"
    }
    else if(!employeeDetails.state){
        showMessage.state="please enter your state name"
    }
    else if(!employeeDetails.pincode){
        showMessage.pincode="please enter your pincode"
    }
    else if(!employeeDetails.pan){
        showMessage.pan="please enter your pancard number"
    }
    else if(!employeeDetails.noffm){
        showMessage.noffm="please enter your family member name"
    }
    else if(!employeeDetails.fdob){
        showMessage.fdob="please enter date of birth"
    }

    else if(!employeeDetails.fgender||employeeDetails.fgender=="Gender"){
        showMessage.fgender="please enter correct gender"
    }
    else if(!employeeDetails.rwfb){
        showMessage.rwfb="please enter your relationship with family member"
    }
    return showMessage;
}

useEffect(() => {
         const user = list.find(user => user.employeeID == parseInt(id));
         user?setEmployeeDetails(user):setEmployeeDetails(employeeDetails)      
         dispatch(editEmployeeInputValue(user,id)); 
},[])

  return (
    
    <main>
        <form onSubmit={EventHandle}>
        <h1 className='Details'>Employee Details</h1>
        <div className='borderline'></div>
        <div className="container employee-details">

            
        <div className="containe-1">
        <div className="newfiled">
            <input type="text" placeholder='full name'
            name='fullname'
            onChange={handleChange}
            value={employeeDetails.fullname}
             /><br/>
             <p style={error.fullname?{}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>
             {error.fullname?error.fullname:"your name"}
             </p>
        </div>
        <div className="newfiled">
            <input type="date" placeholder='DOB'
            name='dob'
            onChange={handleChange}
            value={employeeDetails.dob}
             /><br/>
             <p style={error.dob?{}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>{error.dob?error.dob:"your date of birth"}</p>
        </div>
        </div>

        <div className="containe-1">
        <div className="newfiled">
            <select className='gender' name='gender'
             value={employeeDetails.gender} defaultValue={'Gender'}
             onChange={handleChange}
              > 
                <option>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select><br/>
            <p style={error.gender?{}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>
             {error.gender?error.gender:"your date of birth"}
            </p>
        </div>
       
        <div className="newfiled">
        <div className='container-gender'>
            <input type="checkbox" name="hobby" value="sports" id="sport" /><strong>Sports</strong>
            <input type="checkbox" name="hobby" value="sports" id="sport"/><strong>Music</strong>
            <input type="checkbox" name="hobby" value="sports" id="sport"/><strong>Reading</strong>
            </div>
            </div>
        </div>

        <div className="containe-1">
        <div className="newfiled">
            <input type="text" placeholder='Permanent Address'
            name='paddress'
            onChange={handleChange}
            value={employeeDetails.paddress}
             /><br/>
            <p style={error.paddress?{}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>
            {error.paddress?error.paddress:"yours permanent address is"}</p>
        </div>
        <div className="newfiled">
            <input type="text" placeholder='Local Address'
            name='laddress'
            onChange={handleChange}
            value={employeeDetails.laddress}
             /><br/>
            <p style={error.laddress?{}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>
            {error.laddress?error.laddress:"yours Local address is"}
            </p>
        </div>
        </div>


        <div className="containe-1">
        
        <div className="newfiled">
            <input type="text" placeholder='City'
            name='city'
            onChange={handleChange}
            value={employeeDetails.city}
             /><br/>
            <p style={error.city?{}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>
            {error.city?error.city:"your city name is"}
            </p>
        </div>

        <div className="newfiled">
            <input type="text" placeholder='State'
            name='state'
            onChange={handleChange}
            value={employeeDetails.state}
             /><br/>
            <p style={error.state?{}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>
            {error.state?error.state:"your state is"}
            </p>
        </div>

        </div>


        <div className="containe-1">
        <div className="newfiled">
            <input type="number" placeholder='Pincode'
            name='pincode'
            onChange={handleChange}
            value={employeeDetails.pincode}
             /><br/>
            <p style={error.pincode?{}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>
            {error.pincode?error.pincode:"your Pincode is"}
            </p>
        </div>
        <div className="newfiled">
            <input type="text" placeholder='Pancard'
            name='pan'
            onChange={handleChange}
            value={employeeDetails.pan}
             /><br/>
            <p style={error.pan?{}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>
            {error.pan?error.pan:"your Pancard Number is"}
            </p>
        </div>
        </div>


        <div className="containe-1">
        <div className="newfiled">
            <input type="text" placeholder='Name Of Family Member'
           
            name='noffm'
            onChange={handleChange}
            value={employeeDetails.noffm}
             /><br/>
            <p style={error.noffm?{}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>
            {error.noffm?error.noffm:"yours Local address is"}
            </p>
        </div>
        <div className="newfiled">
        <input type="date" placeholder='DOB'
         
            name='fdob'
            onChange={handleChange}
            value={employeeDetails.fdob}
             /><br/>
             <p style={error.fdob?{}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>
             {error.fdob?error.fdob:"your date of birth"}
             </p>
        </div>
        </div>


        <div className="containe-1">
        <div className="newfiled">
        <select className='gender' name='fgender'
             value={employeeDetails.fgender} defaultValue={'Gender'}
             onChange={handleChange}
              > 
                <option>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select><br/>
            <p style={error.fgender?{}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>
             {error.fgender?error.fgender:"your date of birth"}
            </p>
        </div>
        <div className="newfiled">
            <input type="text" placeholder='RelationShip with Family Member'
       
            name='rwfb'
            onChange={handleChange}
            value={employeeDetails.rwfb}
             /><br/>
         
            <p style={error.rwfb?{}:{borderBottom:"1px solid lightgray",color:'lightgray'}}>
            {error.rwfb?error.rwfb:"RelationShip is"}
            </p>
        </div>
        </div>
        
        <button className="button_submit"  type='submit'>Submit</button>
        {/* {isValidObject()===true?"Update":"Submit"} */}
         </div>
        </form>
        
    </main>
  )
}

export default EmployeeForm