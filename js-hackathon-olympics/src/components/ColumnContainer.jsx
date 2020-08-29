import React from "react";
import TaskModal from "./TaskModal";
import Column from "./Column";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DefaultTask } from "./DefaultTask";

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: 10,
  margin: 10
});

export default class ColumnContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedTaskDetails: {
        title: "",
        description: "",
      },
      columns: [
        {
          name: "Todo",
          content: [{ task: "Finish amazing app", taskId: 1 }],
        },
        {
          name: "In-Progress",
          content: [{ task: "Build amazing app", taskId: 2 }],
        },
        {
          name: "Complete",
          content: [{ task: "Design amazing app", taskId: 3 }],
        },
      ],
      items: DefaultTask,
    };
    this.closeModal = this.closeModal.bind(this);
    this.getTaskDetails = this.getTaskDetails.bind(this);
    this.reorder = this.reorder.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  getTaskDetails(task) {
    this.setState({
      selectedTaskDetails: {
        title: task.title,
        description: task.description,
      },
      showModal: true,
    });
  }

  reorder(list, startIndex, endIndex) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  }

  onDragEnd(result) {
    if (!result.destination) {
      return;
    }
    const sourceIndex = result.source.index;
    const destIndex = result.destination.index;
    if (result.type === "droppableItem") {
      const items = this.reorder(this.state.items, sourceIndex, destIndex);

      this.setState({
        items,
      });
    } else if (result.type === "droppableSubItem") {
      const itemSubItemMap = this.state.items.reduce((acc, item) => {
        acc[item.id] = item.subItems;
        return acc;
      }, {});

      const sourceParentId = result.source.droppableId;
      const destParentId = result.destination.droppableId;
      const sourceSubItems = itemSubItemMap[sourceParentId];
      const destSubItems = itemSubItemMap[destParentId];

      let newItems = [...this.state.items];

      /** In this case subItems are this.reordered inside same Parent */
      if (sourceParentId === destParentId) {
        const reorderedSubItems = this.reorder(sourceSubItems, sourceIndex, destIndex);
        newItems = newItems.map((item) => {
          if (item.id === sourceParentId) {
            item.subItems = reorderedSubItems;
          }
          return item;
        });
        this.setState({
          items: newItems,
        });
      } else {
        let newSourceSubItems = [...sourceSubItems];
        const [draggedItem] = newSourceSubItems.splice(sourceIndex, 1);

        let newDestSubItems = [...destSubItems];
        newDestSubItems.splice(destIndex, 0, draggedItem);
        newItems = newItems.map((item) => {
          if (item.id === sourceParentId) {
            item.subItems = newSourceSubItems;
          } else if (item.id === destParentId) {
            item.subItems = newDestSubItems;
          }
          return item;
        });
        this.setState({
          items: newItems,
        });
      }
    }
  }

  render() {
    if (this.state.showModal) {
      return (
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center">
            {this.state.columns.map((column) => {
              return <Column className="col d-flex" key={column.columnId} title={column.name} tasks={column.content} />;
            })}
            <TaskModal closeModal={this.closeModal}></TaskModal>
          </div>
        </div>
      );
    } else {
      return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable" type="droppableItem">
            {(provided, snapshot) => (
              <div
                className="d-flex flex-nowrap"
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {this.state.items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <Column
                        title={item.title}
                        subItems={item.subItems}
                        columnId={item.id}
                        parentProvided={provided}
                        parentSnapshot={snapshot}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      );
    }
  }
}
