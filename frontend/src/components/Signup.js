import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Signup = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handelSubmit = (w) => {};

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
            onChange={(e) =>
              setInputs({ ...inputs, [e.target.name]: e.target.value })
            }
            variant="outlined"
            placeholder="Name"
            margin="normal"
          />
          <TextField
            name="email"
            value={inputs.email}
            onChange={(e) =>
              setInputs({ ...inputs, [e.target.name]: e.target.value })
            }
            type="email"
            variant="outlined"
            placeholder="Email"
            margin="normal"
          />
          <TextField
            name="password"
            value={inputs.password}
            onChange={(e) =>
              setInputs({ ...inputs, [e.target.name]: e.target.value })
            }
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
