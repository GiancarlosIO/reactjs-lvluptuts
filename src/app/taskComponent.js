import React from 'react';

class TaskComponent extends React.Component {
  render() {
    return(
      <li>
        {this.props.task.name} - {this.props.task.time} - <span onClick={this.handleDelete.bind(this)} style={{backgroundColor: "#454545", color: '#fff'}}>X</span>
      </li>
    );
  }

  //custom functions

  handleDelete() {
    this.props.onDeleteTask(this.props.task);
  }

}

export default TaskComponent;
