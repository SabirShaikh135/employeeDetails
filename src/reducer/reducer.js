const initialData={
    list:[]
}

const reducer=(state=initialData,action)=>{
    switch (action.type) {
        case "Add-Employee-InputValue":
            const {data}=action.payload;
            return{
                ...state,
                list:data
            }
        case "delete-Employee-InputValue":
            const {employeeID}=action.payload;
            return{
                list:[
                    ...state.list.filter(list=>list.employeeID !== employeeID)
                ]
            }
        
        case "edit-EmployeeInputValue":
                const {id,user}=action.payload
                return {
                    ...state,
                    list: state.list.map(list=> list.employeeID === action.id ? // Loop through the array to find the list you want to modify
                        { list} : list // Copy the post state and then modify it. Else return the same object.
                    )
                }
        default: return state
    }
}

export default reducer;