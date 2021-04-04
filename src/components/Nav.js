import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    const {
      constUri,
    } = this.props;

    return (
      <>
        <div className="container-fluid link-nav-bar">
          <div className="row link-nav-bar-row">
              <Link
                to={`${constUri}`}
                style={{ textDecoration: 'none' }}
                className="col-2 bg-warning text-dark text-center"
              >
                Driver Standings
              </Link>

              <Link
                to={`${constUri}`}
                style={{ textDecoration: 'none' }}
                className="col-2 bg-warning text-dark text-center"
              >
                Constructor Standings
              </Link>

              <Link
                to={`${constUri}/schedule`}
                style={{ textDecoration: 'none' }}
                className="col-2 bg-warning text-dark text-center"
              >
                Schedule / Race Results
              </Link>
              <div
                className="col-6 bg-dark text-light"
              >
                UNDER CONSTRUCTION
              </div>
          </div>  
        </div> 
      </>
    );
  }
}

export default Nav;