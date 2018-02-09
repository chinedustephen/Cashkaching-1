import React from "react";

const NumberSvg = props => (
  <svg
    width="195px"
    height="195px"
    viewBox="0 0 195 195"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Group 3</title>
    <desc>Created with Sketch.</desc>
    <defs>
      <rect
        id="path-101"
        x="17.3333333"
        y="17.3333333"
        width="121.875"
        height="121.875"
        rx="60.9375"
      />
      <filter
        x="-64.4%"
        y="-39.0%"
        width="228.8%"
        height="231.3%"
        filterUnits="objectBoundingBox"
        id="filter-102"
      >
        <feOffset dx="0" dy="19" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation="19"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.22 0"
          type="matrix"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        />
        <feOffset dx="0" dy="15" in="SourceAlpha" result="shadowOffsetOuter2" />
        <feGaussianBlur
          stdDeviation="6"
          in="shadowOffsetOuter2"
          result="shadowBlurOuter2"
        />
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.22 0"
          type="matrix"
          in="shadowBlurOuter2"
          result="shadowMatrixOuter2"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="shadowMatrixOuter2" />
        </feMerge>
      </filter>
      <rect
        id="path-103"
        x="37.375"
        y="37.375"
        width="81.25"
        height="81.25"
        rx="40.625"
      />
      <filter
        x="-96.6%"
        y="-58.5%"
        width="293.2%"
        height="296.9%"
        filterUnits="objectBoundingBox"
        id="filter-104"
      >
        <feOffset dx="0" dy="19" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation="19"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.22 0"
          type="matrix"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        />
        <feOffset dx="0" dy="15" in="SourceAlpha" result="shadowOffsetOuter2" />
        <feGaussianBlur
          stdDeviation="6"
          in="shadowOffsetOuter2"
          result="shadowBlurOuter2"
        />
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.22 0"
          type="matrix"
          in="shadowBlurOuter2"
          result="shadowMatrixOuter2"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="shadowMatrixOuter2" />
        </feMerge>
      </filter>
    </defs>
    <g
      id="Main-Expeiance"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="Desktop_PlayedCard"
        transform="translate(-775.000000, -259.000000)"
      >
        <g id="Played-card" transform="translate(256.000000, 198.000000)">
          <g id="Group-15" transform="translate(538.000000, 61.000000)">
            <g id="Group-3">
              <g id="Group-2" fill={props.outer}>
                <g id="Group">
                  <path
                    d="M78,-4.73579509e-15 L78,-4.73579509e-15 L78,0 C121.07821,-7.91294114e-15 156,34.9217895 156,78 L156,78 C130.361111,78 104.384305,78 78.0695803,78 C78.0217746,99.6666667 78.0217746,124.884554 78.0695803,153.653663 L78,156 L78,156 L78,156 C34.9217895,156 -1.33070638e-14,121.07821 -5.68434189e-14,78 L-9.1191811e-14,78 L-8.52651283e-14,78 C-9.05404224e-14,34.9217895 34.9217895,7.91294114e-15 78,0 Z"
                    id="Rectangle-6-Copy-5"
                  />
                </g>
              </g>
              <g id="Second-circle">
                <use
                  fill="black"
                  fillOpacity="1"
                  filter="url(#filter-102)"
                  xlinkHref="#path-101"
                />
                <use
                  fill={props.mid}
                  fillRule="evenodd"
                  xlinkHref="#path-101"
                />
              </g>
              <g id="First-circle">
                <use
                  fill="black"
                  fillOpacity="1"
                  filter="url(#filter-104)"
                  xlinkHref="#path-103"
                />
                <use
                  fill={props.top}
                  fillRule="evenodd"
                  xlinkHref="#path-103"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default NumberSvg;
