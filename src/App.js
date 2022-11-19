import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactForm from "./Components/ContactForm";
import ItemComponent from "./Components/ItemCompo/ItemComponent";
import UseReducerComponent from "./Components/useReducer/UseReducerComponent";
import Tooltip from "./Components/tooltip/tooltip";
import Btnclick from "./Components/btnClick/btnclick";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/ItemComponent" component={ItemComponent} />
          <Route
            exact
            path="/UseReducerComponent"
            component={UseReducerComponent}
          />
          <Route exact path="/Tooltip" component={Tooltip} />
          <Route exact path="/" component={ContactForm} />
          <Route exact path="/Btnclick" component={Btnclick} />
        </Switch>
      </Router>
      {/* <ContactForm /> */}

      {/* <ItemComponent /> */}

      {/* <UseReducerComponent /> */}
      {/* <Tooltip /> */}
    </div>
  );
}

export default App;
