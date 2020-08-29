import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { ContextMenuTrigger } from "react-contextmenu";
import ContextPopup from './ContextPopup'

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
    this.handleClickDelete = this.handleClickDelete.bind(this)
  }

  handleClickDelete(event) {
    event.stopPropagation();
    this.props.deleteTask(event.currentTarget.id, this.props.columnId);
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
                    <ContextMenuTrigger id={item.id}>
                      <div
                        className="shadow-sm"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                        id={item.id}
                      >
                        <button type="button" className="close" id={item.id} onClick={this.handleClickDelete}>
                          <span>&times;</span>
                        </button>
                        <h5>{item.title}</h5>
                        <p className="mb-1">{item.content}</p>
                        <button
                          className="btn btn-secondary"
                          onClick={() => {
                            this.props.getTaskDetails(item);
                          }}
                        >
                          Details
                        </button>
                      </div>
                    </ContextMenuTrigger>
                    <ContextPopup id={item.id} />
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
