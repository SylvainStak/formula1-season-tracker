import React, { Component } from 'react';
import axios from 'axios';

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { match } = this.props;

    return (
      <>
        <h1 className="text-light">Round {match.params.roundId}</h1>                
      </>
    );
  }
}

export default Results;