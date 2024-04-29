const baseUrl = 'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees';
const departments = ['hr', 'marketing', 'finance', 'engineering', 'operations'];
const genders = ['male', 'female']; 

let currentPage = 1;
let limit = 10;
let filterBy = '';
let filterValue = '';
let sortBy = '';
let order = '';

const employeeTable = document.getElementById('employee-table');
const departmentSelect = document.getElementById('department-filter');
const genderSelect = document.getElementById('gender-filter');
const sortSelect = document.getElementById('sort-by');
const prevButton = document.getElementById('prev-page');
const nextButton = document.getElementById('next-page');

function populateTable(data, totalCount) {
  employeeTable.innerHTML = '';
  data.forEach((employee, index) => {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td><span class="math-inline">\{index \+ 1\}</td>
<td>\${employee.name}</td>
      <td><span class="math-inline">\{employee\.gender\}</td>
<td>\${employee.department}</td>
      <td>\${employee.salary}</td>
    `;
    employeeTable.appendChild(tableRow);
  });
  updatePaginationButtons(totalCount);
}

function fetchEmployees() {
  const url = new URL(baseUrl);
  url.searchParams.set('page', currentPage);
  url.searchParams.set('limit', limit);

  if (filterBy && filterValue) {
    url.searchParams.set('filterBy', filterBy);
    url.searchParams.set('filterValue', filterValue);
  }

  if (sortBy && order) {
    url.searchParams.set('sort', sortBy);
    url.searchParams.set('order', order);
  }

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(HTTP error! status: ${response.status});
      }
      return response.json();
    })
    .then(data => {
      populateTable(data.employees, data.totalCount);
    })
    .catch(error => console.error('Error fetching employees:', error));
}

function updatePaginationButtons(totalCount) {
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage * limit >= totalCount;
}

function handleFilterChange(event) {
  filterBy = event.target.value.split('-')[0].toLowerCase(); 
  filterValue = event.target.value.split('-')[1].toLowerCase(); 
  currentPage = 1; 
  fetchEmployees();
}

function handleSortChange(event) {
  const selectedOption = event.target.value;
  if (selectedOption) {
    sortBy = 'salary';
    order = selectedOption === 'lowToHigh' ? 'asc' : 'desc';
  } else {
    sortBy = '';
    order = '';
  }
  currentPage = 1; 
  fetchEmployees();
}

function handlePrevButtonClick() {
  if (currentPage > 1) {
    currentPage--;
    fetchEmployees();
  }
}

function handleNextButtonClick() {
  currentPage++;
  fetchEmployees();
}

function populateDropdowns() {
  departments.forEach(department => {
    const option = document.createElement('option');
    option.value = ${department}-department;
    option.textContent = department;
    departmentSelect.appendChild(option);
  });

  genders.forEach(gender => {
    const option = document.createElement('option');
    option.value = ${gender}-gender;
    option.textContent = gender;
    genderSelect.appendChild(option);
  });

  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = '--Select--';
  departmentSelect.prepend(defaultOption);
  genderSelect.prepend(defaultOption);
}

populateDropdowns();
fetchEmployees();