import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main"
import AboutPage from "./views/AboutPage";
import ContactPage from "./views/ContactPage";
import DraftPage from "./views/DraftPage";
import FormPage from "./views/FormPage";
import HomePage from "./views/HomePage";
import PatientPage from "./views/PatientPage";
import NotFoundPage from "./views/NotFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Main />
      <Switch>
      	<Route path="/" exact component={HomePage}/>
      	<Route path="/forms" component={FormPage}/>
      	<Route path="/draft/:form_id/:patient_id" component={DraftPage}/>
        <Route path="/patients" component={PatientPage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/contact" component={ContactPage}/>
      	<Route path="*" component={NotFoundPage}/>
      </Switch>
    </Router>
  );
}

export default App;
