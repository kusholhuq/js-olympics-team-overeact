import React from 'react';
import TaskCard from './TaskCard';

export default class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className='w-25 vh-100 border'>
        <header className='border mx-0 w-100 d-flex justify-content-center'>
          {this.props.title}
        </header>
        <div className='mx-0 w-100 d-flex justify-content-center'>
          {
          this.props.tasks.map(content=>{
            return (
              <TaskCard
              key={content.taskId}
              content={content.task}
              />
            )
          })
          }
        </div>
      </div>
    )
  }
}
