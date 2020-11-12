let computer=[]

export const useComputer=()=>{
    return computer.slice()
}

export const getComputer=()=>{
    return fetch ("http://localhost:8088/computers")
        .then(response=>response.json())
        .then (parsedComputer=>{
            computer=parsedComputer
        })
}