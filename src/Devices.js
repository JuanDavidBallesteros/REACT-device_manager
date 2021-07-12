import React from 'react';

function Devices() {
  return (
    <>
      <div className="alert d-none" role="alert" id="alerts">
      </div>
      <header>

        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="index.html">Devise Manager</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
              aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Devices<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./zones/index.html">Zones</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./administrator/index.html">Administrators</a>
                </li>
              </ul>
              <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
        </div>
      </header>
      <main>

        <div className="container-fluid boxHs">
          <h1 className="title">Devices</h1>
          <button type="button" className="btn btn-light" id="addDeviceButton" data-toggle="modal" data-target="#exampleModal">Add
            Device</button>
        </div>

        <div className="container-fluid boxCentered">
          <table className="table table-dark">
            <thead>
              <tr className="title1">
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Zone</th>
                <th scope="col">ID</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody id="devicesList">
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}

export default Devices;