import React from "react";
import TaskCard from "./TaskCard";
import EditableLabel from 'react-inline-editing';

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
    const { title, tasks, columnId, parentProvided, parentSnapshot, addTask, _handleFocus, _handleFocusOut } = this.props;

    return (

      <div className="w-25 vh-100 mx-3">
        <div
          className="shadow rounded"
          ref={parentProvided.innerRef}
          {...parentProvided.draggableProps}
          style={getItemStyle(parentSnapshot.isDragging, parentProvided.draggableProps.style)}
        >
          <header className="mx-0 w-100 d-flex justify-content-center" {...parentProvided.dragHandleProps}>

            <EditableLabel text={title}
              labelClassName='myLabelClass'
              inputClassName='myInputClass'
              inputWidth='200px'
              inputHeight='25px'
              inputMaxLength= {50}
              labelFontWeight='bold'
              inputFontWeight='bold'
              onFocus={_handleFocus}
              onFocusOut={_handleFocusOut}
            />

          </header>
            <div className="d-flex justify-content-center">
              <i onClick={()=>addTask(this.props.columnId)} className="fas fa-plus"></i>
            </div>
          <TaskCard tasks={tasks} columnId={columnId} _handleFocus={_handleFocus} _handleFocusOut={_handleFocusOut}  />

        </div>
        {parentProvided.placeholder}
      </div>
    );
  }
}
