import React from 'react';
import '../stylesheets/App.css';
import Bucket from './bucket';
import { getTasks, addTask, deleteTask, updateTask } from '../util/task_api_util';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [],
      progress: [],
      review: [],
      complete: []
    }
  }

  componentDidMount() {
    let data = getTasks();
    let todoArr = [];
    let progressArr = [];
    let reviewArr = [];
    let completeArr = [];
    for(let i = 0; i < data.length; i++) {
      if(data[i].type === 'TO DO') todoArr.push(data[i]);
      if(data[i].type === 'IN PROGRESS') progressArr.push(data[i]);
      if(data[i].type === 'IN REVIEW') reviewArr.push(data[i]);
      if(data[i].type === 'COMPLETE') completeArr.push(data[i]);
    }
    this.setState({ todo: todoArr, progress: progressArr, review: reviewArr, complete: completeArr });
  }

  render() {
    return (
      <div>
        <header>Kanban Board</header>
        <div>
          <Bucket
            bucketName={'Todo'}
            items={this.state.todo}
            addTask={addTask}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
          <Bucket
            bucketName={'In Progress'}
            items={this.state.progress}
            addTask={addTask}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
          <Bucket
            bucketName={'In Review'}
            items={this.state.review}
            addTask={addTask}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
          <Bucket
            bucketName={'Complete'}
            items={this.state.complete}
            addTask={addTask}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        </div>
      </div>
    );
  }
}

export default App;
