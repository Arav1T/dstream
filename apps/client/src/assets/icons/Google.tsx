import React from "react";

interface IProps {
  width?: string;
  height?: string;
  style?: object;
}

function Google({ width, height, style }: IProps) {
  return (
    <svg
      width={width || "20"}
      height={height || "20"}
      viewBox={`0 0 ${width || "20"} ${height || "20"}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...style }}
    >
      <mask
        id="mask0_111_6790"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <path
          d="M19.6307 8.18182H10.3125V12.0455H15.6761C15.1761 14.5 13.0852 15.9091 10.3125 15.9091C7.03978 15.9091 4.40341 13.2727 4.40341 10C4.40341 6.72727 7.03978 4.09091 10.3125 4.09091C11.7216 4.09091 12.9943 4.59091 13.9943 5.40909L16.9034 2.5C15.1307 0.954542 12.858 -3.8147e-06 10.3125 -3.8147e-06C4.76705 -3.8147e-06 0.3125 4.45454 0.3125 10C0.3125 15.5455 4.76705 20 10.3125 20C15.3125 20 19.858 16.3636 19.858 10C19.858 9.40909 19.7671 8.77273 19.6307 8.18182Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_111_6790)">
        <path
          d="M-0.59668 15.9091V4.09091L7.1306 10L-0.59668 15.9091Z"
          fill="#FBBC05"
        />
      </g>
      <mask
        id="mask1_111_6790"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <path
          d="M19.6307 8.18182H10.3125V12.0455H15.6761C15.1761 14.5 13.0852 15.9091 10.3125 15.9091C7.03978 15.9091 4.40341 13.2727 4.40341 10C4.40341 6.72727 7.03978 4.09091 10.3125 4.09091C11.7216 4.09091 12.9943 4.59091 13.9943 5.40909L16.9034 2.5C15.1307 0.954542 12.858 -3.8147e-06 10.3125 -3.8147e-06C4.76705 -3.8147e-06 0.3125 4.45454 0.3125 10C0.3125 15.5455 4.76705 20 10.3125 20C15.3125 20 19.858 16.3636 19.858 10C19.858 9.40909 19.7671 8.77273 19.6307 8.18182Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask1_111_6790)">
        <path
          d="M-0.59668 4.09091L7.1306 10L10.3124 7.22727L21.2215 5.45454V-0.909096H-0.59668V4.09091Z"
          fill="#EA4335"
        />
      </g>
      <mask
        id="mask2_111_6790"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <path
          d="M19.6307 8.18182H10.3125V12.0455H15.6761C15.1761 14.5 13.0852 15.9091 10.3125 15.9091C7.03978 15.9091 4.40341 13.2727 4.40341 10C4.40341 6.72727 7.03978 4.09091 10.3125 4.09091C11.7216 4.09091 12.9943 4.59091 13.9943 5.40909L16.9034 2.5C15.1307 0.954542 12.858 -3.8147e-06 10.3125 -3.8147e-06C4.76705 -3.8147e-06 0.3125 4.45454 0.3125 10C0.3125 15.5455 4.76705 20 10.3125 20C15.3125 20 19.858 16.3636 19.858 10C19.858 9.40909 19.7671 8.77273 19.6307 8.18182Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask2_111_6790)">
        <path
          d="M-0.59668 15.9091L13.0397 5.45454L16.6306 5.90909L21.2215 -0.909096V20.9091H-0.59668V15.9091Z"
          fill="#34A853"
        />
      </g>
      <mask
        id="mask3_111_6790"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <path
          d="M19.6307 8.18182H10.3125V12.0455H15.6761C15.1761 14.5 13.0852 15.9091 10.3125 15.9091C7.03978 15.9091 4.40341 13.2727 4.40341 10C4.40341 6.72727 7.03978 4.09091 10.3125 4.09091C11.7216 4.09091 12.9943 4.59091 13.9943 5.40909L16.9034 2.5C15.1307 0.954542 12.858 -3.8147e-06 10.3125 -3.8147e-06C4.76705 -3.8147e-06 0.3125 4.45454 0.3125 10C0.3125 15.5455 4.76705 20 10.3125 20C15.3125 20 19.858 16.3636 19.858 10C19.858 9.40909 19.7671 8.77273 19.6307 8.18182Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask3_111_6790)">
        <path
          d="M21.2216 20.9091L7.13068 10L5.3125 8.63636L21.2216 4.09091V20.9091Z"
          fill="#4285F4"
        />
      </g>
    </svg>
  );
}

export default Google;
