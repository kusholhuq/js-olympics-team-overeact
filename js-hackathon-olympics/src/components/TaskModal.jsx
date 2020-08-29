import React from 'react';

export default class TaskModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    if(this.props.showModal){
    return(
      <div className='backdrop d-flex'>
        <div className='modal-contents m-auto bg-white border rounded p-3 task-modal'>
          <div className="d-flex justify-content-between btn-footer">
            <button className="btn btn-primary mb-2">Complete</button>
            <button className="btn btn-danger mb-2" onClick={this.props.closeModal}>Close</button>

          </div>
          <h3 className='mt-3'>this.props.task.title</h3>
          <p className=''>this.props.task.description</p>
          <p>+ Add checklist item</p>


        </div>
      </div>
    )
    }
    else{
      return null;
    }
  }

}
