import React from 'react';
import {Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import "semantic-ui-css/semantic.min.css"
import LoginPage from "./pages/LoginPage";
import BookHub from "./pages/BookHub";


  const App = () => (
   <Container-fluid>
     <Route path='/' exact component={HomePage}/>
      <Route path='/login' exact component={LoginPage}/>
      <Route path='/BookHub' exact component={BookHub}/>


   </Container-fluid>

  );
export default App;
