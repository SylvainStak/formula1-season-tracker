import React, { Component } from 'react';
import axios from 'axios';
import '../Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      driverStandingsData: [],
    };
  }

  async componentDidMount() {
    await axios.get('https://ergast.com/api/f1/current/driverstandings.json')
      .then(response => {
        this.setState({
          driverStandingsData: response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings,
        });
      });
  }

  render() {
    const {
      driverStandingsData,
    } = this.state;

    {/* RENDER TABLE ROW FOR EACH DRIVER */}
    const renderDriverStandings = driverStandingsData.map(driver => (
      <tr key={driver.Driver.driverId}>
        <td className="align-middle">{driver.position}</td>
        <td className="align-middle">
          <img
            src={`/formula1-season-tracker/drivers/${driver.Driver.driverId}.png`}
            width="100"
            height="100"
            alt={driver.Driver.driverId}/>
        </td>
        <td className="align-middle">
          <img
            src={`/formula1-season-tracker/flags/${driver.Driver.nationality}.png`}
            width="32"
            height="32"
            className="flagimg"
            alt={driver.Driver.nationality}/>
          {`${driver.Driver.givenName} ${driver.Driver.familyName}`}
        </td>
        <td className="align-middle">
          <img
            src={`/formula1-season-tracker/constructors/${driver.Constructors[0].constructorId}.png`}
            width="50"
            height="50"
            alt={driver.Constructors[0].constructorId}/>
        </td>
        <td className="align-middle">{driver.Constructors[0].name}</td>
        <td className="align-middle points-column">{driver.points}</td>
        <td className="align-middle points-column">{driver.wins}</td>
      </tr>
    ));

    return (
      <>
      {/* RENDER DRIVERS TABLE IF THERE IS AVAILABLE DATA */}
      {driverStandingsData && driverStandingsData.length > 0 ? (
        <div className="container mt-4">
          <table className="table text-light">
            <thead>
              <tr>
                <th scope="col">Pos.</th>
                <th scope="col"></th>
                <th scope="col">Driver</th>
                <th scope="col"></th>
                <th scope="col">Constructor</th>
                <th scope="col">Points</th>
                <th scope="col">Wins</th>
              </tr>
            </thead>
            <tbody>
              {renderDriverStandings}
            </tbody>
          </table>
        </div>
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

export default Home;