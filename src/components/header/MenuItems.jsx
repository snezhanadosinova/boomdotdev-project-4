import * as React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames";
import { Button } from "@mui/material";


export default function MenuItems() {
    return (                
      <div className={classNames(styles.divButtons)}>
        <Button className={classNames(styles.textButton)}>Home</Button>
        <Button className={classNames(styles.textButton)}>Activity</Button>
        <Button variant="contained">Explore</Button>
      </div>
      );

}