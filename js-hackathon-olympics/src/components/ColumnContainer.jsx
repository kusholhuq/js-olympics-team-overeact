import React from 'react';
import TaskModal from './TaskModal';

export default class ColumnContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnCount: 3,
      showModal: true
    }
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
          <TaskModal></TaskModal>
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
