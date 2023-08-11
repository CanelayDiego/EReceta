import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";

let fecha = new Date();
let año = fecha.getFullYear();

function Footer() {
  return (
    <div>
      <AppBar
        sx={{
          bottom: 0,
          top: "90%",
          backgroundColor: "white",
          color: "black",
        }}
      >
        <Toolbar>
          <Grid container spacing={3}>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              {" "}
              <p style={{ textAlign: "center" }}>CopyRight {año}</p>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Footer;
