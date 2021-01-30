import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import ItemDetails from "./pages/itemDetails";
import NullaBibeundum from "./pages/nullabibeundum";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/nullabibeundum" component={NullaBibeundum} />
          <Route path="/:id" component={ItemDetails} />
          <Route path="/" exact component={Home} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
