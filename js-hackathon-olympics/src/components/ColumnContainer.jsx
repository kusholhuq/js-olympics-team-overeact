import React from 'react';
import TaskModal from './TaskModal';
import Column from './Column';


export default class ColumnContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnCount: 3,
      showModal: true,
      selectedTaskDetails: {
        title: '',
        description: ''
      },
      columns: [
        {
          name: 'Todo',
          content: [{ task: 'Finish amazing app', taskId: 1 }]
        },
        {
          name: 'In-Progress',
          content: [{ task: 'Build amazing app', taskId: 2 }]
        },
        {
          name: "Complete",
          content: [{ task: 'Design amazing app', taskId: 3 }]
        }
      ]
    }
    this.closeModal = this.closeModal.bind(this);
    this.getTaskDetails = this.getTaskDetails.bind(this);
  }

  closeModal() {
    this.setState({ showModal: false })
  }

  getTaskDetails(task) {
    this.setState({
      selectedTaskDetails: {
        title: task.title,
        description: task.description
      },
      showModal: true
    });
    console.log('imhere');
  }
  render() {
    if (this.state.showModal) {
      return (
        <div className='container'>
          <div className='d-flex flex-wrap justify-content-center'>
            {
              this.state.columns.map(column => {
                return (
                  <Column
                    className="col d-flex"
                    key={column.columnId}
                    title={column.name}
                    tasks={column.content}
                    getTaskDetails={this.getTaskDetails}
                  />
                )
              }
              )}
            < TaskModal closeModal={this.closeModal}></TaskModal>
          </div>
        </div >
      )
    } else {

      return (
        <div className='container'>
          <div className='d-flex flex-wrap justify-content-center'>
            {
              this.state.columns.map(column => {
                return (
                  <Column
                    className="col d-flex"
                    key={column.columnId}
                    title={column.name}
                    tasks={column.content}
                  />
                )
              })
            }
          </div>
        </div>
      )
    }
  }
}
