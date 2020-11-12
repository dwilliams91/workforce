let departments=[]

export const useDepartments=()=>{
    return departments.slice()
}

export const getDeptarments=()=>{
    return fetch ("http://localhost:8088/departments")
        .then(response=>response.json())
        .then (parsedDepartments=>{
            departments=parsedDepartments
        })
}