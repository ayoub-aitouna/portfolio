import React from "react";
import "../css/menu.css";

export default function menu() {
  return (
    <div>
      <div className='menu'>
        <div className='icon'></div>
        <div className='main'>
          <ul>
            <li className='li'>
              <div className='line'></div>
              <div className='elment'>Home.</div>
            </li>
            <li className='li'>
              <div className='line'></div>
              <div className='element'>Pages.</div>
            </li>
            <li className='li'>
              <div className='line'></div>
              <div className='element'>Blog.</div>
            </li>
            <li className='li'>
              <div className='line'></div>
              <div className='element'>Store.</div>
            </li>
            <li className='li'>
              <div className='line'></div>
              <div className='element'>Contacts.</div>
            </li>
          </ul>
        </div>
        <div className='last'>
          <ul>
            <li className='li'>
              <a
                href='http://www.linkden.com'
                target='_blank'
                rel='noopener noreferrer'>
                <span
                  class='iconify'
                  data-inline='false'
                  data-icon='brandico:linkedin-rect'></span>
              </a>
            </li>
            <li className='li'>
              <a
                target='_blank'
                href='https://github.com/jrayoub'
                rel='noreferrer'>
                <span
                  class='iconify'
                  data-inline='false'
                  data-icon='codicon:github'></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
