import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nextRaceData: null,
    };
  }

  async componentDidMount() {
    // Get next round race schedule
    await axios.get('https://ergast.com/api/f1/current/next.json')
      .then(response => {
        this.setState({
          nextRaceData: response.data.MRData.RaceTable.Races[0],
        });
      });
  }

  render() { 
    const {
      constUri,
    } = this.props;

    const {
      nextRaceData,
    } = this.state;

    return (
      <>
        <div className="container-fluid link-nav-bar">
          <div className="row link-nav-bar-row">
              {/* LINK --> DRIVERS STANDINGS */}
              <Link
                to={`${constUri}`}
                style={{ textDecoration: 'none' }}
                className="col-xs-4 col-md-2 bg-warning text-dark text-center"
              >
                Driver Standings
              </Link>

              {/* LINK --> CONSTRUCTORS STANDINGS */}
              <Link
                to={`${constUri}/constructor`}
                style={{ textDecoration: 'none' }}
                className="col-xs-4 col-md-2 bg-warning text-dark text-center midlink"
              >
                Constructor Standings
              </Link>

              {/* LINK --> SCHEDULE / RACE RESULTS */}
              <Link
                to={`${constUri}/schedule`}
                style={{ textDecoration: 'none' }}
                className="col-xs-4 col-md-2 bg-warning text-dark text-center"
              >
                Schedule / Race Results
              </Link>

              {/* NEXT RACE DATA */}
              <div
                className="col-xs-12 col-md-6 bg-dark text-light d-flex justify-content-around"
              >
                <div className="mt-3 next-race-title">Next Race:</div>
                {nextRaceData !== null ? 
                (
                  <>
                  <div>
                    <div className="mt-1 next-race-location">{`${nextRaceData?.raceName || 'Unknown'}, ${nextRaceData?.Circuit.circuitName || 'Unknown'}`}</div>
                    <div>{`${nextRaceData?.date || 'Unknown'} / ${nextRaceData?.time.substring(0,5) || 'Unknown'} (UTC)`}</div>
                  </div>
                  <div className="mt-1">
                    <div>
                      {`${nextRaceData?.Circuit.Location.locality || 'Unknown'} (${nextRaceData?.Circuit.Location.country || 'Unknown'})`}
                    </div>
                    <div>
                    <img
                      src={`/formula1-season-tracker/flags/scheduleflags/${nextRaceData?.Circuit.Location.country || 'Unknown'}.png`}
                      width="50"
                      height="50"
                      alt={nextRaceData?.Circuit.Location.country || 'Unknown'}/>
                    </div>
                  </div>
                  </>
                ) : 
                (
                  <>
                    {/* LOADING SPINNER */}
                    <div className="spinner-border text-warning mt-3" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </>
                )
                }
              </div>
          </div>  
        </div> 
      </>
    );
  }
}

export default Nav;