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
    const { title, tasks, columnId, parentProvided, parentSnapshot, deleteTask } = this.props;

    return (
      <div className="w-25 vh-100 mx-3">
        <div
          className="shadow rounded"
          ref={parentProvided.innerRef}
          {...parentProvided.draggableProps}
          style={getItemStyle(parentSnapshot.isDragging, parentProvided.draggableProps.style)}
        >
          <header className="mx-0 w-100 d-flex justify-content-center" {...parentProvided.dragHandleProps}>

            <h4 className="pt-3 pb-2">{title}</h4>
          </header>
            <div className="d-flex justify-content-center">
              <i onClick={()=>this.props.addTask(this.props.id)} className="fas fa-plus"></i>
            </div>
          <TaskCard tasks={tasks} columnId={columnId} deleteTask={deleteTask} getTaskDetails={this.props.getTaskDetails} />

        </div>
        {parentProvided.placeholder}
      </div>
    );
  }
}
