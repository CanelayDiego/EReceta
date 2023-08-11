import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import DescriptionIcon from "@mui/icons-material/Description";

function Header() {
  return (
    <Grid xs={12}>
      <AppBar className="header" color="secondary">
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={1}>
              {/* <MenuIcon style={{ paddingTop: "25%", paddingBottom: "25%" }} /> */}
            </Grid>
            <Grid item xs={3}>
              <h1>
                {" "}
                <DescriptionIcon />
                E-Receta
              </h1>
            </Grid>
            <Grid item xs={8}></Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default Header;
