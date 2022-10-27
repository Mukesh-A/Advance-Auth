import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handelChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:4000/api/signup", {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    //send http request
    sendRequest().then(() => history("/login"));
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <Box
          marginRight="auto"
          marginLeft="auto"
          display="flex"
          width={"500px"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant="h2"> Signup</Typography>
          <TextField
            name="name"
            value={inputs.name}
            onChange={handelChange}
            variant="outlined"
            placeholder="Name"
            margin="normal"
          />
          <TextField
            name="email"
            value={inputs.email}
            onChange={handelChange}
            type="email"
            variant="outlined"
            placeholder="Email"
            margin="normal"
          />
          <TextField
            name="password"
            value={inputs.password}
            onChange={handelChange}
            type="password"
            variant="outlined"
            placeholder="Password"
            margin="normal"
          />
          <Button variant="contained" type="submit">
            Signup
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Signup;
