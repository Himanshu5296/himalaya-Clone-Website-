import Home from './components/HOME_PAGE/Home/Home';
import './App.css';
import Toggle from './components/HOME_PAGE/NAVBAR/Toggle';
import MainRoutes from './Routes/MainRoutes';
import Navbar from './components/HOME_PAGE/NAVBAR/Navbar';
import Register from './SignIn/Register';

//  
// import Searchbar from './components/HOME_PAGE/Home/Searchbar';




function App() {
  return (
    <div className="App">
     {/* <Home/> */}
     {/* <Navbar/> */}
     {/* <Register/> */}
     <MainRoutes/>
     {/* <Insta/> */}
     {/* <Searchbar/> */}
     {/* <Toggle/> */}

    </div>
  );
}

export default App;
