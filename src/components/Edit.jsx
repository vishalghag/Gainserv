import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Edit() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const editIndex = parseInt(localStorage.getItem('editIndex'), 10);
    const userData = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [];

    if (editIndex >= 0 && editIndex < userData.length) {
      const selectedUser = userData[editIndex];
      setUserName(selectedUser.userName);
      setUserEmail(selectedUser.userEmail);
      setUserRole(selectedUser.userRole);
    }
  }, []);

  const handleEdit = () => {
    const editIndex = parseInt(localStorage.getItem('editIndex'), 10);
    const userData = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [];

    const updatedData = userData.map((user, index) => {
      if (index === editIndex) {
        return { userName, userEmail, userRole };
      } else {
        return user;
      }
    });

    localStorage.setItem("data", JSON.stringify(updatedData));
    navigate("/read");
  };

  return (
    <>
    <h2>Edit User</h2>
      <TextField
        style={{ margin: "20px" }}
        label="Name"
        name="name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br></br>
      <TextField
        style={{ margin: "20px" }}
        label="Email"
        name="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
       <br></br>
      <TextField
        style={{ margin: "20px" }}
        label="Role"
        name="role"
        value={userRole}
        onChange={(e) => setUserRole(e.target.value)}
      />
       <br></br>
      <Button onClick={handleEdit} variant="contained">
        SUBMIT
      </Button>
      <Button style={{margin:'20px'}} onClick={() => navigate('/read')} variant="contained">
        Cancel
      </Button>
    </>
  );
}

export default Edit;
