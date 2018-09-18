import React, { Component } from "react";

import ListItem from "./ListItem";

class ActivityList extends Component {
  state = {
    filter: "all",
    completion: false
  };

  handleDeleteListItem = toDo => {
    this.props.onDeleteListItem(toDo);
  };

  handleComplete = query => {
    this.setState({
      completion: query
    });
  };

  all = () => {
    this.setState({
      filter: "all"
    });
  };

  complete = () => {
    this.setState({
      filter: "complete"
    });
  };

  incomplete = () => {
    this.setState({
      filter: "incomplete"
    });
  };

  render() {
    const activitySelectedClass = "activity-type--selected";

    let allSelectedRenderedClass = "";
    let completeSelectedRenderedClass = "";
    let incompleteSelectedRenderedClass = "";

    const goals = this.props.data.filter(data => {
      data.complete = this.state.completion;

      if (this.state.filter === "all") {
        allSelectedRenderedClass = activitySelectedClass;
        return data;
      } else if (this.state.filter === "complete") {
        completeSelectedRenderedClass = activitySelectedClass;
        return data.complete === true;
      } else {
        incompleteSelectedRenderedClass = activitySelectedClass;
        return data.complete === false;
      }
    });

    return (
      <div>
        {this.props.data.length === 0 ? (
          <p>No hay actividades</p>
        ) : (
          <div>
            <div>
              <span
                onClick={this.all}
                className={`activity-type ${allSelectedRenderedClass}`}
              >
                All
              </span>
              <span
                onClick={this.complete}
                className={`activity-type ${completeSelectedRenderedClass}`}
              >
                Complete
              </span>
              <span
                onClick={this.incomplete}
                className={`activity-type ${incompleteSelectedRenderedClass}`}
              >
                Incomplete
              </span>
            </div>

            <div>
              {goals.map(activity => {
                return (
                  <ListItem
                    key={activity.toDo}
                    activity={activity}
                    onDelete={this.handleDeleteListItem}
                    onComplete={this.handleComplete}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ActivityList;
