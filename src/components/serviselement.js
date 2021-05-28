import React from "react";
import style from "../css/servises.module.css";
import { win, android, react, more } from "../Assets";
function serviselement(props) {
  let image = { win: win, android: android, react: react };

  return (
    <div>
      <div className={style.element}>
        <img
          src={image[props.imageSrc]}
          alt=''
          width='100px'
          height='100px'
          srcSet=''
        />
        <h4 className={style.name}>{props.name}</h4>
        <p className={style.details}>{props.details}</p>
        {/* <div className={style.more}>
          <p className={style.p}>more</p>
          <img src={more} className={style.moreImg} alt='more' />
        </div> */}
      </div>
    </div>
  );
}

export default serviselement;
