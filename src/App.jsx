import React from "react";
import Login from "./Pages/Login";
import LandingPage from './Pages/Landing';
import SignUp from './Pages/SignUp';
import Choose from "./Pages/Choose";
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';

// Switch, Router
function App() {
  return (
    <div>
     <BrowserRouter>
 <LandingPage/>  
<SignUp/>
 <Login/>  
 <Choose/> 
     </BrowserRouter>
    </div>
  )}
export default App;
