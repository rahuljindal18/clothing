import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {HomePage} from './pages/homepage/homepage.component';
import './App.css';

const HatsPage = () => (
  <div>Hats</div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route  path="/" component={HatsPage}></Route>
      </Switch>
      <HomePage/>
    </div>
  );
}

export default App;
