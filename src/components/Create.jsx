import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("");

  const [userNameError, setUserNameError] = useState("");
  const [userEmailError, setUserEmailError] = useState("");
  const [userRoleError, setUserRoleError] = useState("");

  const history = useNavigate();

  const validateName = () => {
    if (!userName.trim()) {
      setUserNameError("Name is required");
      return false;
    }
    setUserNameError("");
    return true;
  };

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!userEmail.trim()) {
      setUserEmailError("Email is required");
      return false;
    } else if (!emailRegex.test(userEmail)) {
      setUserEmailError("Invalid email format");
      return false;
    }
    setUserEmailError("");
    return true;
  };

  const validateRole = () => {
    if (!userRole.trim()) {
      setUserRoleError("Role is required");
      return false;
    }
    setUserRoleError("");
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isRoleValid = validateRole();
  
    if (isNameValid && isEmailValid && isRoleValid) {
      let userData = localStorage.getItem('data') && localStorage.getItem('data').length > 0 ? JSON.parse(localStorage.getItem('data')) : [];
      localStorage.setItem('data', JSON.stringify([...userData, { userName, userEmail, userRole }]));
      history('/read');
    }
  };
  

  return (
    <div>
      <h2>Add User Data</h2>
      <form>
        <TextField
          style={{ margin: "20px" }}
          label="Name"
          name="name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onBlur={validateName} // Validate onBlur
          error={!!userNameError}
          helperText={userNameError}
        />

        <br />
        <TextField
          style={{ margin: "20px" }}
          label="Email"
          name="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          onBlur={validateEmail} // Validate onBlur
          error={!!userEmailError}
          helperText={userEmailError}
        />

        <br />
        <TextField
          style={{ margin: "20px" }}
          label="Role"
          name="role"
          value={userRole}
          onChange={(e) => setUserRole(e.target.value)}
          onBlur={validateRole} // Validate onBlur
          error={!!userRoleError}
          helperText={userRoleError}
        />

        <br />
        <Button variant="contained" color="primary" onClick={submitHandler}>
          Add User
        </Button>

        <Button style={{ margin: "10px" }} variant="contained" color="primary" onClick={() => history('/read')}>
          Already Save Data
        </Button>

      </form>
    </div>
  );
};

export default Create;
