import React from 'react';
import { useEffect } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import "./ShowData.css";
import { addEmployeeInputValue,deleteEmployeeInputValue} from "../actions";
import {useDispatch,useSelector} from "react-redux";
import { useState } from 'react';
function ShowData() {
const dispatch=useDispatch();
const list=useSelector((state)=>state.reducer.list);    
const navigate=useNavigate();
useEffect(()=>{
    const getEmployeeDataFromLS=JSON.parse(localStorage.getItem("employeeDetails"));
    dispatch(addEmployeeInputValue(getEmployeeDataFromLS));
},[])

const deleteEmployee=(e,employeeID,fullname)=>{
    e.preventDefault();
    window.confirm(`Are you Sure to Delete ${fullname}`)
    dispatch(deleteEmployeeInputValue(employeeID));
    console.log("employeeID",employeeID);
    console.log("getEmployeeDataFromLS",list);
}

const editEmployee=(e,employeeID)=>{
    e.preventDefault();
    console.log("editEmployee",employeeID)
    navigate(`/editEmployee/${employeeID}`);
}
    return (
        <div className="mt-3">
            <Link to="/">
            <button className='btn btn-primary mainContainer mb-3' >Logout</button>
            </Link>
        
        <div className="tablerecord">
            <table>
                <tbody>
                    <tr>
                        <th>#</th>
                        <th>fullname</th>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>hobbies</th>
                        <th>Permanent address</th>
                        <th>Local address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Pincode</th>
                        <th>Pancard Number</th>
                        <th>Family Member Name</th>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>Releationship</th>
                        <th>Action</th>
                    </tr>
                    {
                        list.map((data,index)=>{
                       const {employeeID,fullname,dob,gender,hobbies,paddress,laddress, 
                       city,state,pincode,pan,noffm,fdob,fgender,rwfb}=data;  
                            return(

                                <tr key={employeeID}>
                                    {/* <td>{employeeID}</td> */}
                                    <td>{index+1}</td>
                                    <td>{fullname}</td>
                                    <td>{dob}</td>
                                    <td>{gender}</td>
                                    <td>{hobbies}</td>
                                    <td>{paddress}</td>
                                    <td>{laddress}</td>
                                    <td>{city}</td>
                                    <td>{state}</td>
                                    <td>{pincode}</td>
                                    <td>{pan}</td>                                 
                                    <td>{noffm}</td>
                                    <td>{fdob}</td>
                                    <td>{fgender}</td>
                                    <td>{rwfb}</td>
                                    <td><button className="btn btn-primary" onClick={(e)=>editEmployee(e,employeeID)}>Edit</button>
                                        <button className="btn btn-danger" onClick={(e)=>deleteEmployee(e,employeeID,fullname)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
    
        </div>
    </div>
      )
}

export default ShowData