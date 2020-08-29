import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import EditableLabel from 'react-inline-editing';

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
                      <EditableLabel text={item.title}
                        labelClassName='myLabelClass'
                        inputClassName='myInputClass'
                        inputWidth='80%'
                        inputHeight='25px'
                        inputMaxLength={50}
                        labelFontWeight='bold'
                        inputFontWeight='bold'
                        onFocus={this.props._handleFocus}
                        onFocusOut={this.props._handleFocusOut}
                      />
                      <EditableLabel text={item.content}
                        labelClassName='myLabelClass'
                        inputClassName='myInputClass'
                        inputWidth='100%'
                        inputHeight='25px'
                        inputMaxLength={50}
                        labelFontWeight=''
                        inputFontWeight='bold'
                        onFocus={this.props._handleFocus}
                        onFocusOut={this.props._handleFocusOut}
                      />
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
