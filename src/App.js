import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Page from './Page';
import Nav from './components/Nav';


function App() {
  return (
    <>
      <div className='container'>
        <header>
          < Nav entity={undefined} />
        </header>
        <Switch>
          <Route exact path="/" component={() => <Page title="Devices" entity="devices" />} />
          <Route path="/zones" component={() => <Page title="Zones" entity="zones" />} />
          <Route path="/administrators" component={() => <Page title="Managers" entity="administrators" />} />
        </Switch>
      </div>

    </>
  );
}

export default App;
