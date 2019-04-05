import React from "react";

export const Button = props => {
  const { handleClick, className, text, value, id } = props;

  return handleClick ? (
    <div className={className} onClick={() => handleClick(value, id)}>
      {text}
    </div>
  ) : (
    <div className={className}>{text}</div>
  );
};
