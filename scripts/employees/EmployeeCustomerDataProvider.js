let employeeCustomer=[]

export const useEmployeeCustomer=()=>{
    return employeeCustomer.slice()
}

export const getEmployeeCustomer=()=>{
    return fetch ("http://localhost:8088/employeeCustomers")
        .then(response=>response.json())
        .then (parsedEmployeeCustomer=>{
            employeeCustomer=parsedEmployeeCustomer
        })
}