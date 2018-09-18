import React, { Component } from "react";
import moment from "moment";

class ListItem extends Component {
  handleDelete = () => {
    this.props.onDelete(this.props.activity.toDo);
  };

  handleChange = event => {
    this.props.onComplete(event.target.checked);
  };

  render() {
    const listItemPainted = `item--painted`;
    const listItemWhite = `item--white`;

    let itemListStatus;

    if (this.props.activity.urgency === true) {
      itemListStatus = listItemPainted;
    } else {
      itemListStatus = listItemWhite;
    }

    return (
      <div className={`item ${itemListStatus}`}>
        <div>
          <input
            type="checkbox"
            className="checkbox"
            onChange={this.handleChange}
          />
          <span className="activities">{this.props.activity.toDo}</span>
          <button className="btn delete" onClick={this.handleDelete}>
            x
          </button>
        </div>
        <div>
          <span className="date">
            {moment(this.props.activity.dueDate).format("MMMM Do YYYY")}
          </span>
        </div>
      </div>
    );
  }
}

export default ListItem;
