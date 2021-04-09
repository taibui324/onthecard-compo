import React , { useState}from 'react'; // call state later
import styled , { createGlobalStyle, css} from 'styled-components'; 
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from "./Form";
import Youtube from "./Youtube";

function App () {

  return ( 

    <Router> 
      <div className = "App">
        <Navbar />

      <div className = "content">
      <Switch>
      <Route exact path = "/">
        <Form />
      </Route>

      <Route path = "/youtube">
        <Youtube />

      
      </Route>
      </Switch>
      </div>
      </div>
    </Router>
  );
  }
   
export default App;