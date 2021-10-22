import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Start from "./App";
// import Comments from "./Comments";
import Addstory from "./Components/AddStory/AddStoryFunc";
import Story from "./Components/AllStories/Story";
import Home from "./Components/Home/Home";
import store from "./store/index";

export default function App() {
  // <Route exact path="/app" render={props => <App {...props} />} />
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          {/* <Route exact path="/" render={(props) => <BreederClub {...props} />} /> */}

          {/* <Route exact path="/" render={(props) => <Signup {...props} />} /> */}
          {/* <Route
            exact
            path="/home"
            render={(props) => <YourGroup {...props} />}
          /> */}

          <Route exact path="/home" render={(props) => <Home {...props} />} />

          <Route exact path="/Story" render={(props) => <Story {...props} />} />

          <Route
            exact
            path="/addstory"
            render={(props) => <Addstory {...props} />}
          />

          <Route
            exact
            path="/profile"
            render={(props) => <Start {...props} />}
          />

          {/* <Route
            exact
            path="/Comments"
            render={(props) => <Comments {...props} />}
          /> */}
        </Switch>
      </Router>
    </Provider>
  );
}
