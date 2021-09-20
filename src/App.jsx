import './App.css';
import LandingPage from './Pages/Landing';
import { BrowserRouter } from 'react-router-dom';
// import { useMediaQuery } from 'react-responsive';
// import MediaQuery from 'react-responsive';


// Switch, Route
function App() {

  //
  // const isMobileDevice = useMediaQuery({
  //   query: "(min-device-width: 480px)",
  // });

  // const isTabletDevice = useMediaQuery({
  //   query: "(min-device-width: 768px)",
  // });

  // const isLaptop = useMediaQuery({
  //   query: "(min-device-width: 1024px)",
  // });

  // const isDesktop = useMediaQuery({
  //   query: "(min-device-width: 1200px)",
  // });

  // const isBigScreen = useMediaQuery({
  //   query: "(min-device-width: 1201px )",
  // });


  return (
    <div>
      <BrowserRouter>
        <LandingPage/>
      </BrowserRouter>
      
      
          
    </div>
  )}
       
 

export default App;
