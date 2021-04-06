import React, { Component } from 'react';
import axios from 'axios';
import '../Schedule.css';

class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seasonSchedule: [],
    };
  }

  async componentDidMount() {
    await axios.get('https://ergast.com/api/f1/current.json')
      .then(response => {
        this.setState({
          seasonSchedule: response.data.MRData.RaceTable.Races,
        });
      });
  }

  render() {
    const {
      seasonSchedule,
    } = this.state;

    /* RENDER INFO BANNER FOR EACH RACE IN THE SCHEDULE */
    const renderSeasonSchedule = seasonSchedule.map(round => (
      <div
        className="schedule-item bg-warning d-flex"
        key={round.Circuit.circuitId}>
        <div className="circuit-img-container">
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
          <div><em>{round.Circuit.circuitName}</em></div>
          <div><em>{`${round.date} / ${round.time.substring(0,5)} (UTC)`}</em></div>
          <div>
            <button
              type="button"
              className="btn btn-primary mt-1 results-button disabled"
            >
              Race Results &gt;
            </button>
          </div>
        </div>
        <div className="ml-auto d-flex mr-4">
          <div className="mt-3 mr-2 race-country-name">
            {`${round.Circuit.Location.locality} (${round.Circuit.Location.country})`}
          </div>
          <div>
          <img
            src={`/formula1-season-tracker/flags/scheduleflags/${round.Circuit.Location.country}.png`}
            alt={round.Circuit.circuitId}/>
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