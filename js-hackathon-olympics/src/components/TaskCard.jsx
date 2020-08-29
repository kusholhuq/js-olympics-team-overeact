

import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

const getItemStyle = (isDragging, draggableStyle) => ({
  background: isDragging ? "lightgreen" : "white",
  padding: "1rem",
  margin: "1rem",
  borderRadius: "10px",
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "rgb(235,235,235)" : "rgb(235,235,235)",
  border: "1px solid rgb(225,225,225)",
  padding: "0.5rem 0"
});

export default class TaskCard extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickItem = this.handleClickItem.bind(this)
  }

  handleClickItem(event) {
    console.log(event.currentTarget.id)
  }

  render() {
    return (
      <Droppable droppableId={this.props.columnId} type={`droppableSubItem`}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
            {this.props.tasks.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div>
                    <div
                      className="shadow-sm"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                      id={item.id}
                      onClick={this.handleClickItem}
                    >
                      <button type="button" className="close">
                        <span>&times;</span>
                      </button>
                      <h5>{item.title}</h5>
                      <p className="mb-1">{item.content}</p>
                    </div>
                    {provided.placeholder}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }


}
