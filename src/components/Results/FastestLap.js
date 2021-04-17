import React, { Component } from 'react';

class FastestLap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fastestLaps: null,
    };
  }

  // Extract fastestLaps array to state from raceResults prop
  componentDidMount() {
    const { raceResults } = this.props;
    let results = raceResults && raceResults.Results || [];
    let fastestLaps = [];

    for (let f = 0; f < results.length; f++) {
      fastestLaps.push({
        driverId: results[f].Driver.driverId,
        driverName: `${results[f].Driver.givenName} ${results[f].Driver.familyName}`,
        constructor: results[f].Constructor.name,
        lapData: results[f].FastestLap || {rank: "20"},
      });
    }

    // Order array based on fastest lap rank
    fastestLaps.sort((a, b) => (parseInt(a.lapData.rank) > parseInt(b.lapData.rank)) ? 1 : -1);

    this.setState({ fastestLaps });
  }

  render() {
    const { fastestLaps } = this.state;
    const { raceResults } = this.props;

    /* RENDER FASTEST LAP FROM EACH DRIVER */
    const renderFastestLaps =
      fastestLaps &&
      fastestLaps !== null &&
      fastestLaps.length > 0 &&
      fastestLaps.map(driver => (
      <tr key={driver.driverId}>
        <td className="align-middle">{driver.lapData.rank}</td>
        <td className="align-middle">{driver.driverName}</td>
        <td className="align-middle">{driver.constructor}</td>
        <td className="align-middle">{driver.lapData.lap && driver.lapData.lap}</td>
        <td className="align-middle">{driver.lapData.Time && driver.lapData.Time.time}</td>
        <td className="align-middle">{driver.lapData.AverageSpeed && driver.lapData.AverageSpeed.speed}</td>
      </tr>
    ));

    return (
      <>
        {/* RENDER FASTEST LAPS RESULTS IF THERE IS AVAILABLE DATA */}
        {raceResults && raceResults !== null ? (
          <>
            <div className="container mt-4 table-responsive">
              <table className="table table-sm text-light">
                <thead>
                  <tr>
                    <th scope="col">Pos.</th>
                    <th scope="col">Driver</th>
                    <th scope="col">Constructor</th>
                    <th scope="col">Lap</th>
                    <th scope="col">Time</th>
                    <th scope="col">Average Speed (kph)</th>
                  </tr>
                </thead>
                <tbody>
                  {renderFastestLaps}
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

export default FastestLap;