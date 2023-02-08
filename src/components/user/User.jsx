import * as React from "react";
import styles from "./User.module.scss";
import classNames from "classnames";
import Avatar from "../avatar/Avatar";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid"

export default function User({ name="", info="",avatar="", size=55, verified=false }) {
    return (
        <div className={classNames(styles.user)}>
            <Grid container spacing={1} alignItems="center">
                <Grid item xs="auto">
                    <Item><Avatar size={size} url={avatar} verified /></Item>
                </Grid>
                <Grid item xs="auto">
                    <Item> <div className={classNames(styles.name)}>{name}</div>
                            <div className={classNames(styles.info)}>{info}</div></Item>
                </Grid>
            </Grid>
        </div>
    )
}