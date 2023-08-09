// Define an object to store the Employee Payroll data
const employeePayrollData = {};

// Function to set Employee Payroll data
function setEmployeePayrollData() {
  // Get the values from the form
  const name = document.getElementById("name").value;
  const profileImage = document.querySelector('input[name="profile"]:checked').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const departments = [];
  const departmentCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  departmentCheckboxes.forEach((checkbox) => departments.push(checkbox.value));
  const salary = document.getElementById("salary").value;
  const startDate = {
    day: document.getElementById("day").value,
    month: document.getElementById("month").value,
    year: document.getElementById("year").value,
  };
  const notes = document.getElementById("notes").value;

  // Perform validation on the setter method
  //if (!name || !gender || departments.length === 0 || !salary || !startDate.day || !startDate.month || !startDate.year) {
   // alert("Please fill out all required fields!");
   // return;
  //s}   

  // Populate the Employee Payroll data object
  employeePayrollData.name = name;
  employeePayrollData.profileImage = profileImage;
  employeePayrollData.gender = gender;
  employeePayrollData.departments = departments;
  employeePayrollData.salary = salary;
  employeePayrollData.startDate = startDate;
  employeePayrollData.notes = notes;


  localStorage.setItem("employeeData", JSON.stringify(employeePayrollData));

  alert("Data saved successfully!");

  // Display the Employee Payroll data object in the console (for testing purposes)

}
