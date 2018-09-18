import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import NewActivity from "./components/NewActivity";
import ActivityList from "./components/ActivityList";

class App extends Component {
  state = {
    allActivities: [
      {
        toDo: "Read book",
        dueDate: "2018-04-30",
        urgency: false,
        complete: false
      }
    ]
  };

  handleCreateActivity = query => {
    const nextAllActivities = [...this.state.allActivities, query];
    this.setState({
      allActivities: nextAllActivities
    });
  };

  handleDeleteActivity = toDo => {
    const nextAllActivities = this.state.allActivities.filter(
      activity => activity.toDo !== toDo
    );

    this.setState({
      allActivities: nextAllActivities
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <NewActivity
          onCreateActivity={this.handleCreateActivity}
          completed={this.state.completion}
        />
        <hr />
        <ActivityList
          data={this.state.allActivities}
          onDeleteListItem={this.handleDeleteActivity}
        />
      </div>
    );
  }
}

export default App;
