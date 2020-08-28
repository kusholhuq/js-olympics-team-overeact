import React from 'react';
import TaskModal from './TaskModal';

export default class ColumnContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnCount: 3,
      showModal: true,
      selectedTaskDetails:{
        title:'',
        description:''
      }
    }
    this.closeModal = this.closeModal.bind(this);
    this.getTaskDetails = this.getTaskDetails.bind(this);
  }

  closeModal(){
    this.setState({showModal:false})
  }

  getTaskDetails(task){
    this.setState({
      selectedTaskDetails:{
        title:task.title,
        description:task.description
      },
      showModal:true
    });
  }

  render() {
    if (this.state.showModal) {
      return (
        <div className='container'>
          <div className='row d-flex'>
            <div className='col'>Column1</div>
            <div className='col'>Column2</div>
            <div className='col'>Column2</div>
          </div>
          <TaskModal closeModal={this.closeModal}></TaskModal>
        </div>
      )
    }
    else {
      return (
        <div className='container'>
          <div className='row d-flex'>
            <div className='col'>Column1</div>
            <div className='col'>Column2</div>
            <div className='col'>Column2</div>
          </div>
        </div>
      )
    }
  }
}
