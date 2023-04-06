import Image from "next/image";
import React from "react";

type Props = {
  label: string;
  icon?: any;
  onClick?: () => void;
  fill?: string;
  outlineColor?: string;
  outlineWidth?: number;
  borderRadius?: number;
  color?: string;
  width?: string;
};

const Button = ({
  label,
  icon,
  onClick,
  fill,
  outlineColor,
  outlineWidth,
  borderRadius,
  color,
  width,
}: Props) => {
  return (
    <div
      className="buttonContainer"
      style={{
        backgroundColor: fill,
        borderColor: outlineColor,
        borderWidth: outlineWidth + "px",
        borderRadius: borderRadius + "px",
        color: color,
        width: width,
      }}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt="icon" />}
      {label}
    </div>
  );
};

export default Button;
