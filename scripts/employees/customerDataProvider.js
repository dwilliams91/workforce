let customer=[]

export const useCustomer=()=>{
    return customer.slice()
}

export const getCustomer=()=>{
    return fetch ("http://localhost:8088/customers")
        .then(response=>response.json())
        .then (parsedCustomer=>{
            customer=parsedCustomer
        })
}