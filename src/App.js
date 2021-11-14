import Greeting from "./components/Greeting";
import Create from "./components/Create";
import Opener from "./components/Opener";
import ErrorPage from "./components/ErrorPage";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/create" />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route path="/error" component={ErrorPage} />
          <Route exact path="/:id">
            <Opener />
          </Route>
          <Route exact path="/greet/:id">
            <Greeting />
          </Route>
          <Redirect to="/error" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
