import * as React from "react";
import styles from "./Avatar.module.scss";
import classNames from "classnames";


export default function Avatar({ size= "90", url, verified=false }) {
    return (
        <div className={classNames(styles.avatar)}  style={{
            width: size + "px",
            height: size + "px",
          }}>
            <img src={url} alt="" className={classNames(styles.image)}/>
            {verified &&
         <img src="../../images/verified.svg" className={classNames(styles.badge)}/>
      }
           
        </div>
    )
}