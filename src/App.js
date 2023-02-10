import './App.css';

import React from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Commercial from './Components/Commercial';
import Residential from './Components/Residential';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Services from './Components/Services';
import NoPage from './Components/NoPage';
import CCalendar from './Components/CCalendar';
import Rawalpindi from './Components/Rawalpindi';
import Gilgit from './Components/Gilgit';
import InformationState from './context/information/InformationState';
import Appointments from './Components/Appointments';
import Team from './Components/Team';




const App =()=> {
    return (
      <div>  
        <InformationState>
        <Router>
        <Navbar/> 
        <Routes>
          {/*<Route exact path="/home"><Home/></Route>*/}
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/Commercial" element={<Commercial />} />
          <Route exact path="/Residential" element={<Residential />} />
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Rawalpindi" element={<Rawalpindi/>}/>
          <Route exact path="/Gilgit" element={<Gilgit/>}/>
          <Route exact path="/Meettheteam" element={<Team/>}/>
          <Route exact path="*" element={<NoPage/>} />
          {/*<Route exact path="/CCalendar" element={<CCalendar/>} />
          <Route exact path="/Appointments" element={<Appointments/>} />*/}
        </Routes>
        </Router>
        </InformationState>
        
      </div>
    )
  
}
export default App;