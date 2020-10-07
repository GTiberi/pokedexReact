import React, { Component } from "react";

export default class ProfileStats extends Component {
  render() {
    return (
      <div>
        <div className="col-6">
          <h6 className="float-right">{this.props.statName}:</h6>
        </div>
        <div className="col-6">
          <h6 className="float-left">
            {this.props.stats} {this.props.measurements}
          </h6>
        </div>
      </div>
    );
  }
}
