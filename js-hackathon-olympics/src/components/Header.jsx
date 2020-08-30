import React from "react";

export default function Header(props){
  return (
    <div className="d-flex justify-content-between header mb-5">
      <h1 className="ml-5 mt-3 mb-2 pac">Kanban Board</h1>
      <h4 className="mr-5 mt-3 mb-2">
        <i className="fas fa-question-circle"></i>
      </h4>
    </div>
  );
}
