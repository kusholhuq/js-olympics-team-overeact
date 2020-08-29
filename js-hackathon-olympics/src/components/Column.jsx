import React from 'react';
import TaskCard from './TaskCard';

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

export default class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { title, subItems, columnId, parentProvided, parentSnapshot } = this.props;

    return (
      <div className="m-3">
        <div
          className="border"
          ref={parentProvided.innerRef}
          {...parentProvided.draggableProps}
          style={getItemStyle(parentSnapshot.isDragging, parentProvided.draggableProps.style)}
        >
          <header className="border mx-0 w-100 d-flex justify-content-center" {...parentProvided.dragHandleProps}>
            {title}
          </header>
          <TaskCard subItems={subItems} columnId={columnId} />
        </div>
        {parentProvided.placeholder}
      </div>
    );
  }
}
