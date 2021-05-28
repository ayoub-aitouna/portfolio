import React from "react";
import ServesElement from "./serviselement.js";
import style from "../css/servises.module.css";

function servises() {
  return (
    <div className={style.parent}>
      <h3 className={style.headline}>
        {" "}
        My <span>Servesise </span>
      </h3>{" "}
      <p className={style.headlineP}>
        Lorem ipsum is placeholder text commonly used in the graphic, print, &{" "}
        <br />
        publishing industries for previewing layouts and visual mockups.'
      </p>
      <ul className={style.ul}>
        <li>
          <ServesElement
            name='Web Application'
            details='Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
            imageSrc='react'>
            {" "}
          </ServesElement>{" "}
        </li>{" "}
        <li>
          <ServesElement
            name='Android Application'
            details='Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
            imageSrc='android'>
            {" "}
          </ServesElement>{" "}
        </li>{" "}
        <li>
          <ServesElement
            name='Windows Application'
            details='Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
            imageSrc='win'>
            {" "}
          </ServesElement>{" "}
        </li>{" "}
      </ul>{" "}
    </div>
  );
}

export default servises;
