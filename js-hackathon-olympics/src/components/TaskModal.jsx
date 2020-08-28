import React from 'react';

export default class TaskModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <div className='backdrop d-flex'>
        <div className='modal-contents m-auto bg-white border rounded p-3 task-modal'>
          <h3 className='text-center'>this.props.task.title</h3>
          <p className='text-center'>this.props.task.description</p>
          <button className="btn btn-danger">Close</button>
        </div>
      </div>
    )
  }

}
