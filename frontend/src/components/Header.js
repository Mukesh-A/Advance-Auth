import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { authActions } from "../store";
axios.defaults.withCredentials = true;
const Header = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const sendLogoutReq = async () => {
    const res = await axios.post("http://localhost:4000/api/logout", null, {
      withCredentials: true,
    });
    if (res.status == 200) {
      return res;
    }
    return new Error("unable to logout please try again");
  };
  const handelLogout = () => {
    sendLogoutReq().then(() => dispatch(authActions.logout()));
  };
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h3">MERN Auth</Typography>
          <Box sx={{ marginLeft: "auto" }}>
            <Tabs
              indicatorColor="secondary"
              onChange={(e, val) => setValue(val)}
              value={value}
              textColor="inherit"
            >
              {!isLoggedIn && (
                <>
                  <Tab to="/login" LinkComponent={Link} label="Login" />
                  <Tab to="/Signup" LinkComponent={Link} label="Signup" />
                </>
              )}
              {isLoggedIn && (
                <Tab
                  onClick={handelLogout}
                  to="/"
                  LinkComponent={Link}
                  label="LogOut"
                />
              )}
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
