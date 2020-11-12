let location=[]

export const useLocation=()=>{
    return location.slice()
}

export const getLocation=()=>{
    return fetch ("http://localhost:8088/locations")
        .then(response=>response.json())
        .then (parsedLocation=>{
            location=parsedLocation
        })
}