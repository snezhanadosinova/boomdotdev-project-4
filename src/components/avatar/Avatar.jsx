import * as React from "react";
import styles from "./Avatar.module.scss";
import classNames from "classnames";


export default function Avatar({ size, url, verified }) {
    return (
        <div className={classNames(styles.avatar)}  style={{
            width: size + "px",
            height: size + "px",
          }}>
            <img src={url} alt="" className={classNames(styles.image)}/>
            {verified=="true" &&
         <img src="../../images/verified.svg" className={classNames(styles.badge)} width="25%"/>
      }
           
        </div>
    )
}