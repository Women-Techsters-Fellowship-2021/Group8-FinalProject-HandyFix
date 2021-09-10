import Login from "./Pages/Login";
import LandingPage from './Pages/Landing';
import SignUp from './Pages/SignUp';
 import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';

// Switch, Router
function App() {
  return (
    <div>
     <BrowserRouter>
<LandingPage/>
     </BrowserRouter>
    </div>
  )}
export default App;
