import React, { Component } from 'react';
import '../../Race.css';

class Race extends Component {
  // Returns the difference between the starting and finish position
  getGridPositionDiff(pos, grid) {
    let diff = Math.abs(parseInt(pos) - parseInt(grid));
    // if grid == 0 then grid position was pits
    if (parseInt(grid) === 0) diff = Math.abs(parseInt(pos) - 20);
    return diff;
  }

  // Returns true if driver improved the starting position
  positionImproved(pos, grid) {
    let newGrid = grid;
    if(parseInt(grid) === 0) newGrid = 20;
    return parseInt(newGrid) > parseInt(pos);
  }

  render() {
    const { raceResults } = this.props;

    /* RENDER RACE RESULTS FOR EACH DRIVER */
    const renderRaceResults = raceResults && raceResults !== null && raceResults.Results.map(driver => (
      <tr key={driver.Driver.driverId}>
        <td className="align-middle">{driver.position && driver.position}</td>
        <td className="align-middle">
          {`${driver.Driver.givenName && driver.Driver.givenName} ${driver.Driver.familyName && driver.Driver.familyName}`}
        </td>
        <td className="align-middle">{driver.Constructor.name && driver.Constructor.name}</td>
        <td className="align-middle">{driver.laps && driver.laps}</td>
        <td className="align-middle">
          {driver.grid && driver.grid === "0" ? 'Pits' : driver.grid}
        </td>
        <td className="align-middle">
        {this.positionImproved(driver.position, driver.grid) ?
          <>
            <span className="mr-1 text-success">
              {this.getGridPositionDiff(driver.position, driver.grid)}
            </span>
            <i className="fas fa-angle-double-up text-success"></i>
          </> : 
          parseInt(driver.grid) < parseInt(driver.position) ?
          <>
            <span className="mr-1 text-danger">
              {this.getGridPositionDiff(driver.position, driver.grid)}
            </span>
            <i className="fas fa-angle-double-down text-danger"></i>
          </> : ''}
        </td>
        <td className="align-middle">{driver.Time && driver.Time.time}</td>
        <td className="align-middle">{driver.status && driver.status}</td>
        <td className="align-middle d-flex">
          {driver.points && driver.points}
          {driver.FastestLap && driver.FastestLap.rank === "1" && <i className="ml-3 mt-2 fas fa-stopwatch fa-xs"></i>}
        </td>
      </tr>
    ));

    return (
      <>
        {/* RENDER RACE RESULTS IF THERE IS AVAILABLE DATA */}
        {raceResults && raceResults !== null ? (
          <>
            <div className="container mt-4 table-responsive">
              <table className="table table-sm text-light">
                <thead>
                  <tr>
                    <th scope="col">Pos.</th>
                    <th scope="col">Driver</th>
                    <th scope="col">Constructor</th>
                    <th scope="col">Laps</th>
                    <th scope="col">Grid</th>
                    <th scope="col"></th>
                    <th scope="col">Time</th>
                    <th scope="col">Status</th>
                    <th scope="col">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {renderRaceResults}
                </tbody>
              </table>
            </div>
          </>
        ):(
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

export default Race;