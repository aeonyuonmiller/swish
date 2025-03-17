import * as React from "react";

const SvgIcon = ({ color = "#C6FF6A" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        fill={color}
        className="white-hover"
        viewBox="0 0 102 34"
    >
        <rect
            width="11.249"
            height="11.249"
            x="1.1"
            y="11.302"
            // fill={color}
            rx="5.625"
        ></rect>
        <rect
            width="22.499"
            height="11.249"
            x="14.398"
            y="0.896"
            // fill={color}
            rx="5.625"
            transform="rotate(45 14.398 .896)"
        ></rect>
        <rect
            width="22.499"
            height="11.249"
            x="30.006"
            y="-1.354"
            // fill={color}
            rx="5.625"
            transform="rotate(45 30.006 -1.354)"
        ></rect>
        <rect
            width="22.499"
            height="11.249"
            // fill={color}
            rx="5.625"
            transform="scale(-1 1)rotate(45 -37.967 -53.073)"
        ></rect>
        <rect
            width="22.499"
            height="11.249"
            x="55.739"
            y="0.896"
            // fill={color}
            rx="5.625"
            transform="rotate(45 55.74 .896)"
        ></rect>
        <rect
            width="22.499"
            height="11.249"
            x="71.629"
            y="0.896"
            // fill={color}
            rx="5.625"
            transform="rotate(45 71.629 .896)"
        ></rect>
        <rect
            width="22.499"
            height="11.249"
            x="87.52"
            y="0.896"
            // fill={color}
            rx="5.625"
            transform="rotate(45 87.52 .896)"
        ></rect>
    </svg>
);

export default SvgIcon;
