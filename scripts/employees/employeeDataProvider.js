let employee=[]

export const useEmployee=()=>{
    return employee.slice()
}

export const getEmployee=()=>{
    return fetch ("http://localhost:8088/employees")
        .then(response=>response.json())
        .then (parsedEmployee=>{
            employee=parsedEmployee
        })
}