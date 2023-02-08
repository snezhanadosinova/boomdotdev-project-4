import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import LinkButton from "../link/Link";
import Link from "@mui/material/Link"

export default function Header() {
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