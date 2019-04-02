import React from "react";

export default function Button(props) {
  return props.handleClick ? (
    <div className={props.class} onClick={() => props.handleClick(props.value, props.id)}>
      {props.text}
    </div>
  ) : (
    <div className={props.class}>{props.text}</div>
  );
}
