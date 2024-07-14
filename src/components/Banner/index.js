import React from 'react';
import styles from "./Banner.module.css"
import Imagen from "./1669559000581.png"


function Banner() {
  return (
    <div className={styles.banner}>
        <img src={Imagen} alt="Christian muy fashion" />
    </div>
  );
}

export default Banner;
