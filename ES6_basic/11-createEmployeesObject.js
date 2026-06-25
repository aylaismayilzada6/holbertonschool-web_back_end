export default function createEmployeesObject(departmentName, employees) {
    const employeesList = {
        [departmentName]: employees,
    };
    return employeesList;
}
