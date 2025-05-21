import React from "react";

interface SlashIconProps {
  className?: string;
}

const SlashIcon: React.FC<SlashIconProps> = ({ className }) => {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={`of si uw axu ${className || ""}`}
    >
      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
    </svg>
  );
};

export default SlashIcon;
