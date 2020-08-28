import React from "react";

export default function Header(props){
  return (
    <div>
      <div><h1>{props.projectName}</h1></div>
      <div>Help</div>
    </div>
  )
}
