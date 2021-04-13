import React, { Component } from 'react';
import axios from 'axios';

class Constructor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      constructorStandingsData: [],
    };
  }

  async componentDidMount() {
    // Get constructor standings
    await axios.get('https://ergast.com/api/f1/current/constructorstandings.json')
    .then(response => {
      this.setState({
        constructorStandingsData: response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings,
      });
    });
  }

  render() {
    const {
      constructorStandingsData,
    } = this.state;

    /* RENDER TABLE ROW FOR EACH CONSTRUCTOR */
    const renderConstructorStandings = constructorStandingsData.map(constructor => (
      <tr key={constructor.Constructor.constructorId}>
        <td className="align-middle">{constructor.position}</td>
        <td className="align-middle">
          <img
            src={`/formula1-season-tracker/constructors/${constructor.Constructor.constructorId}.png`}
            width="50"
            height="50"
            alt={constructor.Constructor.constructorId}/>
        </td>
        <td className="align-middle">{constructor.Constructor.name}</td>
        <td className="align-middle">
          <img
            src={`/formula1-season-tracker/cars/${constructor.Constructor.constructorId}.png`}
            height="50"
            alt={constructor.Constructor.constructorId}/>
        </td>
        <td className="align-middle points-column">{constructor.points}</td>
        <td className="align-middle points-column">{constructor.wins}</td>
      </tr>
    ));

    return (
      <>
        {/* RENDER CONSTRUCTORS TABLE IF THERE IS AVAILABLE DATA */}
        {constructorStandingsData && constructorStandingsData.length > 0 ? (
        <>
          <h1
            className="text-center text-light mt-2"
          >
            2021 CONSTRUCTOR STANDINGS
          </h1>
          <div className="container mt-4 table-responsive">
            <table className="table text-light">
              <thead>
                <tr>
                  <th scope="col">Pos.</th>
                  <th scope="col"></th>
                  <th scope="col">Constructor</th>
                  <th scope="col"></th>
                  <th scope="col">Points</th>
                  <th scope="col">Wins</th>
                </tr>
              </thead>
              <tbody>
                {renderConstructorStandings}
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

export default Constructor;