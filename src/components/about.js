import React from "react";
import style from "../css/about.module.css";
import { Ilustration } from "../Assets";
function about() {
  return (
    <div>
      <div className={style.container}>
        <div className={style.left_side}>
          <Ilustration className={style.ilustration}></Ilustration>
        </div>
        <div className={style.right_side}>
          <div className={style.A_healine}>
            <div className={style.line}></div>
            <p>Who We Are</p>
          </div>
          <div className={style.A_body}>
            <p className={style.head}>
              We Develop & Design
              <br />
              business ideas
            </p>
            <p className={style.body_text}>
              we want our clients to feel awesome and unique let us <br />
              bring your project to another level!
            </p>
            <button className={style.button}>Our Serves</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
