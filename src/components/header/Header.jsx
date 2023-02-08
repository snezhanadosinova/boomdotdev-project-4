import * as React from "react";
import Container from "@mui/material/Container";
import styles from "./Header.module.scss";
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid"
import Logo from "../logo/Logo";
import Search from "./Search";
import MenuItems from "./MenuItems";

export default function Header() {
    return (
        <div className={classNames(styles.wrapper)}>
          <Container className={classNames(styles.container)} maxWidth="xl">
            <Grid  container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}>
                <Grid item xs={1.5}>
                    <Item>
                        <Logo type={"default"}/>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <Search className={classNames(styles.search)}/>
                    </Item>
                </Grid>
                <Grid item xs>
                    <Item>
                        <MenuItems/>
                    </Item>
                </Grid>
            </Grid>
          </Container>
        </div>
      );

}