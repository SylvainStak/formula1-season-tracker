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
    await this.getDriverStandingsOverRounds();
  }

  async getDriverStandingsOverRounds() {
    await axios.get('http://ergast.com/api/f1/current/driverstandings.json')
      .then(response => {
        this.setState({
          driverStandingsData: response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings,
        });
        console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
      });
  }

  render() {
    const {
      driverStandingsData,
    } = this.state;

    const renderDriverStandings = driverStandingsData.map(driver => (
      <tr key={driver.Driver.driverId}>
        <td scope="row" className="align-middle">{driver.position}</td>
        <td className="align-middle">
          <img
            src={`/formula1-season-tracker/drivers/${driver.Driver.driverId}.png`}
            width="100"
            height="100"/>
        </td>
        <td className="align-middle">
          <img
            src={`/formula1-season-tracker/flags/${driver.Driver.nationality}.png`}
            width="32"
            height="32"
            className="flagimg"/>
          {`${driver.Driver.givenName} ${driver.Driver.familyName}`}
        </td>
        <td className="align-middle">{driver.Constructors[0].name}</td>
        <td className="align-middle points-column">{driver.points}</td>
      </tr>
    ));

    return (
      <>
      {driverStandingsData && driverStandingsData.length > 0 ? (
        <div className="container mt-4">
          <table className="table text-light">
            <thead>
              <tr>
                <th scope="col">Pos.</th>
                <th scope="col"></th>
                <th scope="col">Driver</th>
                <th scope="col">Constructor</th>
                <th scope="col">Points</th>
              </tr>
            </thead>
            <tbody>
              {renderDriverStandings}
            </tbody>
          </table>
        </div>
      ):(
        <div className="spinner-border text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      </>
    );
  }
}

export default Home;