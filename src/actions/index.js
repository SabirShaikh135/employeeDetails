export const addEmployeeInputValue=(data)=>{
    return{
        type:"Add-Employee-InputValue",
        payload:{
            data:data
        }
    }
}

export const deleteEmployeeInputValue=(employeeID)=>{
    return{
        type:"delete-Employee-InputValue",
        payload:{
            employeeID:employeeID
        }
    }
}

export const editEmployeeInputValue=(user,id)=>{
    return{
        type:"edit-EmployeeInputValue",
        payload:{
            user:user,
            id:id
        }
    }
}