import React, { Component } from "react";

export default class ProgressBar extends Component {
  render() {
    return (
      <div className="row align-items-center">
        <div className="col-12 col-md-3">{this.props.statName}</div>
        <div className="col-12 col-md-9">
          <div className="progress">
            <div
              className="progress-bar"
              style={{
                width: `${this.props.stats}%`,
              }}
              aria-valuenow={this.props.stats}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <small>{this.props.stats}</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
