import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Home.js";


import "./css/customize_nav.css";
import CustomNav from "./CustomNav";
import Footer from "./Footer";

function App() {


  return (
    <>
      <CustomNav/>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path='/calling_est/whentocall'/>
        {/* <Route path="/about">
          <>About</>
        </Route>
        <Route path="/users">
          <>users</>
        </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer/>
      
    </>
  );
}

export default App;
