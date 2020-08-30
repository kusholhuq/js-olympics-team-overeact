import React from "react";

export default class Task extends React.Component{
  constructor(props){
    super(props)
    this.state={
      title: this.props.title,
      content: this.props.content,
      taskTitleEditing: false,
      taskContentEditing: false
    }
    this.editTaskTitle = this.editTaskTitle.bind(this)
    this.doneEditingTaskTitle = this.doneEditingTaskTitle.bind(this)
    this.editTaskContent = this.editTaskContent.bind(this);
    this.doneEditingTaskContent = this.doneEditingTaskContent.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  editTaskTitle() {
    this.setState({ taskTitleEditing: true})
  }

  editTaskContent(){
    this.setState({taskContentEditing: true})
  }

  doneEditingTaskTitle(id, title, content) {
    const task = {
      id: id,
      title: title,
      content: content
    }
    this.props.changeItems(id, task)
    this.setState({ taskTitleEditing: false })
  }

  doneEditingTaskContent(id, title, content){
    const task = {
      id: id,
      title: title,
      content: content
    }
    this.props.changeItems(id, task)
    this.setState({ taskTitleEditing: false })
    this.setState({taskContentEditing: false})
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render(){
    return(
      <div>
        {
          this.state.taskTitleEditing
            ? <div>
                <input
                  name="title"
                  type="text"
                  className="w-100 border-noborder"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
                <button onClick={() => this.doneEditingTaskTitle(this.props.id, this.state.title, this.state.content)}>Done</button>
              </div>
            : <h6 onClick={this.editTaskTitle}>{this.state.title}</h6>
        }
        {
          this.state.taskContentEditing
            ? <div>
                <input
                  name="content"
                  type="text"
                  className="w-100 border-noborder"
                  value={this.state.content}
                  onChange={this.handleChange}
                />
              <button onClick={() => this.doneEditingTaskContent(this.props.id, this.state.title, this.state.content)}>Done</button>
              </div>
            : <p onClick={this.editTaskContent}>{this.state.content}</p>
        }
      </div>

    )
  }

}
