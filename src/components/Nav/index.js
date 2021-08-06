import React from 'react';
import { Link } from "react-router-dom";
import classNames from 'classname';
import "./Nav.css";
import Search from '../Search';


function Nav({ entity = undefined }) {
  return (
    <div className="container-fluid" id="nav">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/" id="title">Device Manager</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
          aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className={classNames("nav-item", {
              'active': entity === "devices"
            })}
            >
              <Link className="nav-link" to="/">
                Devices
              </Link>
            </li>
            <li className={classNames("nav-item", {
              'active': entity === "zones"
            })}
            >
              <Link className="nav-link" to="/zones">
                Zones
              </Link>
            </li>
            <li className={classNames("nav-item", {
              'active': entity === "administrators"
            })}
            >
              <Link className="nav-link" to="/administrators">
                Administrators
              </Link>
            </li>
          </ul>
          <Search />
        </div>
      </nav>
    </div>

  );
}

export default Nav;