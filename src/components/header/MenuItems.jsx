import * as React from "react";
import {Grid,Button, Link } from "@mui/material";
import LinkButton from "../link/Link";

export default function MenuItems() {
    return (                
      <Grid  container
                direction="row"
                justifyContent="end"
                alignItems="center"
                spacing={4}>
      <Grid item>
        <Link href="#" underline="none" color="inherit">
            Home
        </Link>
        </Grid>
        <Grid item>
            <Link href="#"  underline="none" color="inherit">
            Activity
            </Link>
        </Grid>
        <Grid item>
          <Button variant="contained" component={LinkButton} noLinkStyle href="/">
            Explore
          </Button>
        </Grid>
      </Grid>
      );

}