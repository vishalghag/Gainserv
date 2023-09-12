import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import TableData from "./TableData";
import { useNavigate } from "react-router-dom";

const Read = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [toggle, setToggle] = useState(false);
  

  const history = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("data");
    setEmployeeData(JSON.parse(userData));
  }, []);

  const deleteFn = (id) => {
    const updatedData = [...employeeData];
    updatedData.splice(id, 1);
    setEmployeeData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));
  };
  const filterData = employeeData && employeeData.length > 0
  ? employeeData.filter((user) =>
      user.userName.toLowerCase().includes(searchText)
    )
  : [];


 

  const sortFnASC = () => {
    let data = [...employeeData];
    data.sort((a, b) => a.userName.localeCompare(b.userName)); // Use localeCompare for string comparison
    setEmployeeData(data);
    setToggle(true);
  };

  const sortFnDSC = () => {
    let data = [...employeeData];
    data.sort((a, b) => b.userName.localeCompare(a.userName)); // Use localeCompare for string comparison
    setEmployeeData(data);
    setToggle(false);
  };

  const handleEdit = (id) => {
    localStorage.setItem('editIndex', id)
    history('/edit')
}
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          style={{ margin: "20px" }}
          label="search user name"
          name="search"
          onChange={(e) => setSearchText(e.target.value)}
        />

        {toggle ? (
          <Button
            style={{ margin: "20px" }}
            variant="contained"
            color="secondary"
            onClick={sortFnDSC}
          >
            Sort Name in DSC
          </Button>
        ) : (
          <Button
            style={{ margin: "20px" }}
            variant="contained"
            color="secondary"
            onClick={sortFnASC}
          >
            {" "}
            Sort Name in ASC{" "}
          </Button>
        )}
      </div>
      <TableContainer component={Paper} style={{ margin: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterData && filterData.length > 0 ? (
              filterData.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.userName}</TableCell>
                  <TableCell>{user.userEmail}</TableCell>
                  <TableCell>{user.userRole}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {handleEdit(index)}}
                    >
                      Edit
                    </Button>
                    <Button
                      style={{ margin: "20px" }}
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        deleteFn(index);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <h2>No data added please click Add data botton below to show data in table</h2>
            )}

            {/* <TableData employeeData={employeeData}/> */}
          </TableBody>
        </Table>
      </TableContainer>

                <Button 
                variant="contained"
                color="secondary" onClick={() => history('/')}>Add Data</Button>

    </div>
  );
};

export default Read;
