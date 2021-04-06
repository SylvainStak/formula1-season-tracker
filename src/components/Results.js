import React, { Component } from 'react';
import '../Results.css';

class Results extends Component {
  constructor(props) {
    super(props);

    /*
      Active Tabs
      R --> Race
      Q --> Qualifying
      F --> Fastest Laps
    */
    this.state = {
      activeTab: 'R',
    };
  }

  render() {
    const { match } = this.props;
    const { activeTab } = this.state;

    return (
      <>
        <h1 className="text-light">Round {match.params.roundId}</h1>
        <div className="container">
          <ul className="nav nav-tabs">
            {/* RACE RESULTS TAB */}
            <li
              className="nav-item"
              onClick={() => {
                this.setState({
                  activeTab: 'R'
                })
              }}
            >
              <a
                className={`nav-link ${activeTab === 'R' ? 'active' : ''}`}
              >
                Race
              </a>
            </li>

            {/* QUALIFYING RESULTS TAB */}
            <li
              className="nav-item"
              onClick={() => {
                this.setState({
                  activeTab: 'Q'
                })
              }}
            >
              <a
                className={`nav-link ${activeTab === 'Q' ? 'active' : ''}`}
              >
                Qualifying
              </a>
            </li>

            {/* FASTEST LAPS RESULTS TAB */}
            <li
              className="nav-item"
              onClick={() => {
                this.setState({
                  activeTab: 'F'
                })
              }}
            >
              <a
                className={`nav-link ${activeTab === 'F' ? 'active' : ''}`}
              >
                Fastest Laps
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Results;