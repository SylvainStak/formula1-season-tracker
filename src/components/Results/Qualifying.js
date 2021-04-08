import React, { Component } from 'react';

class Qualifying extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { qualifyingResults } = this.props;

    return (
      <>
        <h1 className="text-center text-light">Qualifying Results</h1>
      </>
    );
  }
}

export default Qualifying;