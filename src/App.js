import './App.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import TodoList from './Todo';
import Home from './Home';
import LinkContainer from './CustomLink';
import { DivAdder } from './DivAdder';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/links"} component={LinkContainer} />
          <Route exact path={"/divs"} component={DivAdder} />
          <Route exact path={"/todo"} component={TodoList} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
