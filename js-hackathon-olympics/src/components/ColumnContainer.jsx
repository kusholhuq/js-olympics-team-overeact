import React from 'react';
import Column from './Column';

export default class ColumnContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      columnCount: 3,
      taskCount: 3,
      columns: [
        {
        name: 'Todo',
        content: [{task: 'Finish amazing app', taskId: 1}],
        columnId: 1
        },
        {
          name: 'In-Progress',
          content: [{ task: 'Build amazing app', taskId: 2 }],
          columnId: 2
        },
        {
          name: "Complete",
          content: [{ task: 'Design amazing app', taskId: 3 }],
          columnId: 3
        }
      ]
    }
    this.addColumn = this.addColumn.bind(this)
    this.addTask = this.addTask.bind(this)
  }

  addColumn(event){
    event.preventDefault();
    const newColumn = this.state.columns.slice()
          newColumn.push({
          name: "New Column",
          content: [],
          columnId: this.state.columnCount + 1
        })

    this.setState(state=>({columns: newColumn, columnCount: this.state.columnCount+1}))
  }

  addTask(event, columnId) {
    event.preventDefault();
    const columns = this.state.columns.slice()
    const column = columns.filter(col=>{
      return col.columnId === columnId
    })
    column.content.push({
      task: 'Added Task', taskId: this.state.taskCount +1
    })
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
        <button onClick={this.addColumn}>Add Column</button>
        </div>
      </div>
    )
  }
}
