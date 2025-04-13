import React from "react";

export const ShareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8 10H4v10h16V10h-4" />
    <path d="M12 3v13" />
    <path d="M8 6l4-3 4 3" />
  </svg>
);

export default ShareIcon;
