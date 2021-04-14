import React, { Component } from 'react';
import axios from 'axios';
import Race from './Results/Race';
import Qualifying from './Results/Qualifying';
import FastestLap from './Results/FastestLap';
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
      raceResults: null,
      qualifyingResults: null,
    };
  }

  async componentDidMount() {
    const { match } = this.props;

    // Get specific round race results
    await axios.get(`https://ergast.com/api/f1/current/${match.params.roundId}/results.json`)
      .then(response => {
        this.setState({
          raceResults: response.data.MRData.RaceTable.Races[0],
        });
      });

    // Get specific round qualifying results
    await axios.get(`https://ergast.com/api/f1/current/${match.params.roundId}/qualifying.json`)
      .then(response => {
        this.setState({
          qualifyingResults: response.data.MRData.RaceTable.Races[0],
        });
      });
  }

  render() {
    const {
      activeTab,
      raceResults,
      qualifyingResults,
    } = this.state;

    return (
      <>
        {raceResults && raceResults !== null ? (
          <>
            <h1 className="text-center mt-5 text-light">{`${raceResults.season} ${raceResults.raceName}`}</h1>
          </>
        ) :
        (
          <>
            <div className="text-center mt-5">
              <div className="spinner-border text-warning" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </>
        )}
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

          {activeTab === 'R' ? (
            <Race
              raceResults={raceResults} />
          ) : (activeTab === 'Q' ? (
            <Qualifying
              qualifyingResults={qualifyingResults} />
          ) : (activeTab === 'F' ? (
            <FastestLap
              raceResults={raceResults} />
          ) : (<></>)))}
        </div>
      </>
    );
  }
}

export default Results;