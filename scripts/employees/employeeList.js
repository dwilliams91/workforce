import { getComputer, useComputer } from "./computerDataProvider.js"
import { getCustomer, useCustomer } from "./customerDataProvider.js"
import { getDeptarments, useDepartments } from "./departmentDataProvider.js"
import { getEmployeeCustomer, useEmployeeCustomer } from "./EmployeeCustomerDataProvider.js"
import { getEmployee, useEmployee } from "./employeeDataProvider.js"
import { getLocation, useLocation } from "./locationDataProvider.js"
const contentTarget=document.querySelector(".container")


export const employeeList=()=>{
    getEmployee()
    .then(getComputer)
    .then(getDeptarments)
    .then(getLocation)
    .then(getCustomer)
    .then(getEmployeeCustomer)
    .then(()=>{
        const allEmployees=useEmployee()
        const allComputers=useComputer()
        const allDepartments=useDepartments()
        const allLocation=useLocation()
        const allCustomers=useCustomer()
        const allEmployeeCustomer=useEmployeeCustomer()
        
        console.log(allCustomers)
        console.log(allEmployeeCustomer)
        render(allEmployees,allComputers,allDepartments, allLocation,allCustomers,allEmployeeCustomer)
    })

}

const render=(employee,computer,department,location,customer,allEmployeeCustomer)=>{
    console.log(department)
    const allEmployeesAsHTML=employee.map(employeeItem=>{
        
        const relatedComputer = computer.find(computerItem => computerItem.id === parseInt(employeeItem.computerId))
        
        const relatedDepartment = department.find(departmentItem => departmentItem.id === parseInt(employeeItem.departmentId))
        
        const relatedLocation= location.find(locationItem=>locationItem.id===parseInt(employeeItem.locationId))
        

        
        const relatedEmployeeCustomer=allEmployeeCustomer.filter(employeeCustomer=> employeeCustomer.employeeId===employeeItem.id)
        
        
        const relatedCustomers=relatedEmployeeCustomer.map(employeeCustomer=> {
            const foundCustomer=customer.find(customer=>customer.id ===employeeCustomer.customerId)
            return foundCustomer
        })

        console.log(relatedCustomers)


        const employeeHTML=employeeCard(employeeItem,relatedComputer,relatedDepartment,relatedLocation,relatedCustomers)
        return employeeHTML
    }).join("")
    contentTarget.innerHTML=allEmployeesAsHTML

}


const employeeCard=(employee,computer,department,location,customer)=>{
    return `
    <div class="employee">
    <header class="employee__name">
        <h1>${employee.firstName}</h1>
    </header>
    <section class="employee__computer">
        Currently using a ${computer.year} ${computer.model}
    </section>
    <section class="employee__department">
        Works in the ${department.name} department
    </section>
    <section class="employee__department">
        Works in the ${location.name} department
    </section>
    <section class="employee__customers">
        Has worked for the following customers.
        <ul>
            ${customer.map(singleCustomer=> { return `<li>${singleCustomer.name}</li>`})}
        </ul>
    </section>
</div>
        `
}
