import React from "react";
import TaskCard from "./TaskCard";

const getItemStyle = (isDragging, draggableStyle) => ({
  background: isDragging ? "lightgreen" : "lightblue",
  ...draggableStyle,
});

export default class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, tasks, columnId, parentProvided, parentSnapshot } = this.props;

    return (
      <div className="col-4 vh-100">
        <div
          className="shadow rounded"
          ref={parentProvided.innerRef}
          {...parentProvided.draggableProps}
          style={getItemStyle(parentSnapshot.isDragging, parentProvided.draggableProps.style)}
        >
          <header className="mx-0 w-100 d-flex justify-content-center" {...parentProvided.dragHandleProps}>
            <h4 className="align-middle pt-3 pb-2">{title}</h4>
          </header>
          <TaskCard tasks={tasks} columnId={columnId} />
        </div>
        {parentProvided.placeholder}
      </div>
    );
  }
}
