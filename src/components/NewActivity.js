import React, { Component } from "react";

class Adding extends Component {
  toDoRef = React.createRef();
  dueDateRef = React.createRef();
  urgencyRef = React.createRef();

  state = {
    urgent: false
  };

  handleChange = event => {
    this.setState({
      urgent: event.target.checked
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const allActivities = {
      toDo: this.toDoRef.current.value,
      dueDate: this.dueDateRef.current.value,
      urgency: this.state.urgent,
      complete: "false"
    };

    if (allActivities.dueDate === "") {
      alert("Give a due date");
    } else {
      this.props.onCreateActivity(allActivities);
      event.target.reset();
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" ref={this.toDoRef} />
            <button className="btn submit">+</button>
          </div>
          <div>
            <input type="date" ref={this.dueDateRef} />
          </div>
          <div>
            <input
              type="checkbox"
              ref={this.urgencyRef}
              onChange={this.handleChange}
            />
            <span>Critical?</span>
          </div>
        </form>
      </div>
    );
  }
}

export default Adding;
