import React, { Component } from 'react';
import axios from 'axios';
import '../Schedule.css';
import {Link} from 'react-router-dom';

class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seasonSchedule: [],
      nextRound: null,
    };
  }

  async componentDidMount() {
    // Get current season schedule
    await axios.get('https://ergast.com/api/f1/current.json')
      .then(response => {
        this.setState({
          seasonSchedule: response.data.MRData.RaceTable.Races,
        });
      });

    // Get next round schedule
    await axios.get('https://ergast.com/api/f1/current/next.json')
      .then(response => {
        this.setState({
          nextRound: response.data.MRData.RaceTable.round,
        });
      });
  }

  render() {
    const {
      seasonSchedule,
      nextRound,
    } = this.state;

    /* RENDER INFO BANNER FOR EACH RACE IN THE SCHEDULE */
    const renderSeasonSchedule = seasonSchedule.map(round => (
      <div
        className="schedule-item bg-warning d-flex"
        key={round.Circuit.circuitId}>
        <div className="circuit-img-container d-none d-md-block">
          <img
            src={`/formula1-season-tracker/circuits/${round.Circuit.circuitId}.png`}
            width="154.5"
            height="116.25"
            alt={round.Circuit.circuitId}
            className="mt-1" />
        </div>
        <div className="info-container mt-2 ml-2">
          <div>{`Round ${round.round}`}</div>
          <div><span className="race-name">{round.raceName}</span></div>
          <div className="d-block d-xs-none"><em>{round.Circuit.circuitName}</em></div>
          <div><em>{`${round.date} / ${round.time.substring(0,5)} (UTC)`}</em></div>
          <div className="">
            <Link
              to={`/formula1-season-tracker/results/${round.round}`}
              style={{ textDecoration: 'none' }}
              className={`${round.round && round.round >= parseInt(nextRound) ? 'disabled-link' : ''}`}
            >
              <button
                type="button"
                className={`btn btn-primary mt-1 results-button ${round.round && round.round >= parseInt(nextRound) ? 'disabled' : ''}`}
              >
                Race Results &gt;
              </button>
            </Link>
          </div>
        </div>
        <div className="ml-auto">
          <div className="d-none d-sm-block mt-3 mr-1 mr-md-3 race-country-name">
            <span className="float-right">{`${round.Circuit.Location.locality} (${round.Circuit.Location.country})`}</span>
          </div>
          <div>
          <img
            src={`/formula1-season-tracker/flags/scheduleflags/${round.Circuit.Location.country}.png`}
            alt={round.Circuit.circuitId}
            className="float-right mr-1 mr-md-3" />
          </div>
        </div>
      </div>
    ));

    return (
      <>
        {/* RENDER SEASON SCHEDULE IF THERE IS AVAILABLE DATA */}
        {seasonSchedule && seasonSchedule.length > 0 ? (
          <>
            <h1
              className="text-center text-light mt-2"
            >
              2021 SEASON SCHEDULE
            </h1>
            <div className="container">
              {renderSeasonSchedule}
            </div>
          </>
        ) :
        (
          <>
          {/* LOADING SPINNER */}
            <div className="text-center mt-5">
              <div className="spinner-border text-warning" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default Schedule;