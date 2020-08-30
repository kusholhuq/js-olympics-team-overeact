import React from "react";
import TaskCard from "./TaskCard";

const getItemStyle = (isDragging, draggableStyle) => ({
  background: isDragging ? "lightgreen" : "lightblue",
  ...draggableStyle,
});

export default class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnEditing: false,
      title: this.props.title,
      tasks: this.props.tasks,
      columnId: this.props.columnId
    };
    this.editColInputs = this.editColInputs.bind(this)
    this.doneEditingCol = this.doneEditingCol.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  editColInputs() {
    this.setState({ columnEditing: true })
  }

  doneEditingCol() {
    this.setState({ columnEditing: false })
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { title, tasks, columnId, parentProvided, parentSnapshot } = this.props;

    return (

      <div className="w-25 vh-100 mx-3">
        <div
          className="shadow rounded"
          ref={parentProvided.innerRef}
          {...parentProvided.draggableProps}
          style={getItemStyle(parentSnapshot.isDragging, parentProvided.draggableProps.style)}
        >
          <header className="mx-0 w-100 d-flex justify-content-center" {...parentProvided.dragHandleProps}>

          {this.state.columnEditing
              ? <div>
                  <input
                  id="title"
                  type="text"
                  className="w-100 border-noborder"
                  value={this.state.title}
                  onChange={this.handleChange}
                  />
                  <button onClick={()=>this.doneEditingCol()}>Done</button>
                 </div>
              : <h4 className="pt-3 pb-2" onClick={this.editColInputs}>{this.state.title}</h4>
          }
          </header>
            <div className="d-flex justify-content-center">
              <i onClick={()=>this.props.addTask(this.props.columnId)} className="fas fa-plus"></i>
            </div>
          <TaskCard tasks={tasks} columnId={columnId} />

        </div>
        {parentProvided.placeholder}
      </div>
    );
  }
}
