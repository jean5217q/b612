import React, { Component } from 'react';

class Main_Food extends Component {
  render() {
    const { main } = this.props;
    return (
      <div className="i-top-block main">
        <div className="i-top-main-block circle">
            <div className="main-block-circle"></div>
        </div>
        <div className="i-top-main-block info">
          <div className="i-top-main-place">
            <div className="i-top-main-title">{main.location}</div>
          </div>
        </div> 
      </div>
    )
  }
}

export default Main_Food