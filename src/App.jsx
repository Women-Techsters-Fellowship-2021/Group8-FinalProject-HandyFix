import './App.css';
import LandingPage from './Pages/Landing';
import Profile  from './Pages/Profile'
import Navbar  from './Components/Navbar'
import { BrowserRouter } from 'react-router-dom';
// Switch, Route
function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar/> */}
        <LandingPage/>
        {/* <Profile/> */}
      </BrowserRouter>
      
      
      
          
    </div>
  )}
       
 

export default App;
