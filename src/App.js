import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Models from './components/ModelsDetails/Models';
import Model3 from './components/ModelsDetails/Model3';
import Modelx from './components/ModelsDetails/Modelx';
import Modely from './components/ModelsDetails/Modely';
import SolarPanel from './components/ModelsDetails/SolarPanel';

function App() {
  return (

    <Router>
      <Header></Header>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/models'>
          <Models />
        </Route>
        <Route path='/model3'>
          <Model3 />
        </Route>
        <Route path='/modelx'>
          <Modelx />
        </Route>
        <Route path='/modely'>
          <Modely />
        </Route>
        <Route path='/solar-panel'>
          <SolarPanel></SolarPanel>
        </Route>

      </Switch>
    </Router>



  );
}

export default App;
