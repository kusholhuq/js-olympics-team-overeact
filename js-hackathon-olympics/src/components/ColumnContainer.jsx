import React from 'react';
import Column from './Column';

export default class ColumnContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      columnCount: 3,
      columns: [
        {
        name: 'Todo',
        content: [{task: 'Finish amazing app', taskId: 1}]
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
  }

  render(){
    return (
      <div className='container'>
        <div className='d-flex flex-wrap justify-content-center'>
          {
          this.state.columns.map(column=>{
            return (
              <Column
              className = "col d-flex"
              key = {column.columnId}
              title = {column.name}
              tasks = {column.content}
              />
            )
          })
        }





          {/* <div className='col p-0'>
            <Column/>
          </div>
          <div className='col p-0'>
            <Column/>
            </div>
          <div className='col p-0'>
            <Column/>
            </div> */}
        </div>
      </div>
    )
  }
}
