import React, { Component } from 'react';

class Qualifying extends Component {
  render() {
    const { qualifyingResults } = this.props;

    /* RENDER QUALIFYING RESULTS FOR EACH DRIVER */
    const renderQualifyingResults =
      qualifyingResults &&
      qualifyingResults !== null &&
      qualifyingResults.QualifyingResults.map(driver => (
      <tr key={driver.Driver.driverId}>
        <td className="align-middle">{driver.position && driver.position}</td>
        <td className="align-middle">{`${driver.Driver.givenName} ${driver.Driver.familyName}`}</td>
        <td className="align-middle">{driver.Constructor.name}</td>
        <td className="align-middle">{driver.Q1}</td>
        <td className="align-middle">{driver.Q2}</td>
        <td className="align-middle">{driver.Q3}</td>
      </tr>
    ));
    return (
      <>
        {/* RENDER QUALIFYING RESULTS IF THERE IS AVAILABLE DATA */}
        {qualifyingResults && qualifyingResults !== null ? (
          <>
            <div className="container mt-4 table-responsive">
              <table className="table table-sm text-light">
                <thead>
                  <tr>
                    <th scope="col">Pos.</th>
                    <th scope="col">Driver</th>
                    <th scope="col">Constructor</th>
                    <th scope="col" className="pl-5">Q1</th>
                    <th scope="col" className="pl-5">Q2</th>
                    <th scope="col" className="pl-5">Q3</th>
                  </tr>
                </thead>
                <tbody>
                  {renderQualifyingResults}
                </tbody>
              </table>
            </div>
          </>
        ):(
          <>
            <h3 className="text-light text-center mt-5">Data not available</h3>
          </>
        )}
      </>
    );
  }
}

export default Qualifying;