import React from "react";

const NumberSvg = props => (
  <svg
    width="91px"
    height="89px"
    viewBox="0 0 91 89"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Group 16</title>
    <desc>Created with Sketch.</desc>
    <defs />
    <g
      id="Main-Expeiance"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="Desktop_CardCountDown"
        transform="translate(-281.000000, -254.000000)"
      >
        <g id="Waiting-card" transform="translate(256.000000, 198.000000)">
          <g id="Group-16" transform="translate(25.000000, 56.000000)">
            <circle
              id="Oval-7-Copy"
              fill={props.bglabel}
              cx="40"
              cy="40"
              r="40"
            />
            <circle
              id="Oval-7"
              stroke="#FAFAFA"
              fill={props.secbk}
              stroke-dasharray="3"
              cx="50"
              cy="48"
              r="40"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default NumberSvg;
