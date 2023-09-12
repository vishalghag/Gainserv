export const deleteFn = (id, employeeData, setEmployeeData) => {
  const updatedData = [...employeeData];
  updatedData.splice(id, 1);
  setEmployeeData(updatedData);
  localStorage.setItem("data", JSON.stringify(updatedData));
};

export const sortFnASC = (employeeData, setEmployeeData, setToggle) => {
  let data = [...employeeData];
  data.sort((a, b) => a.userName.localeCompare(b.userName)); // Use localeCompare for string comparison
  setEmployeeData(data);
  setToggle(true);
};

export const sortFnDSC = (employeeData, setEmployeeData, setToggle) => {
  let data = [...employeeData];
  data.sort((a, b) => b.userName.localeCompare(a.userName)); // Use localeCompare for string comparison
  setEmployeeData(data);
  setToggle(false);
};

export const filterArray = (employeeData, searchText) => {
  return employeeData && employeeData.length > 0
    ? employeeData.filter((user) =>
        user.userName.toLowerCase().includes(searchText)
      )
    : [];
};
