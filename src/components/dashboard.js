import React from "react";
import "../css/dashboard.css";
// eslint-disable-next-line no-unused-vars
import { Icon, InlineIcon } from "@iconify/react";
import mouseIcon from "@iconify/icons-bi/mouse";

function dashboard() {
  return (
    <div>
      <div className='parent'>
        <div className='headline'>
          <p>
            We Desing & create <br /> unique things
          </p>
          <button>Get In Touch</button>
        </div>
        <div className='scroll'>
          <Icon
            icon={mouseIcon}
            className='mouse'
            style={{ color: "#fff", fontSize: "2rem" }}
          />
          <h5>Scroll Down</h5>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
