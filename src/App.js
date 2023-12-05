import {useAuthContext} from './components/hooks/useAuthContext'
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Partnership from './components/Partnership'
import Participate from './components/participate'
import Schools from './components/Schools';

import Team from './components/Team'
import Affiliates from './components/affiliates';
import React from 'react'
import ReactDOM from 'react-dom'
import Events from './components/events';
import Collges from './components/colleges';
import EventsSchools from './components/schoolsEvents';
import Modules from './components/modules';
import Donor from './components/donor';
import DonorSubs from './components/donorSubs';
import Ylpa from './components/ylpa';
import Conference from './components/conference';
import After_payment from './components/After_payment';
const cors = require('cors')({ origin: true });



function App() {
  const {user} = useAuthContext();
  return (
    <div className="App">
      <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about'  element={<About/>}/>
            <Route path='/partners' element={ <Partnership/>}/>
            <Route path='/participate' element={<Participate/>}/>
            {/* <Route path='/join' element={<JoinUs/>}/> */}
            <Route path='/team' element={<Team/>}/>
            <Route path='/affiliates' element={<Affiliates/>}/>
            <Route path='/colleges' element={<Collges/>}/>
            <Route path='/schools' element={<Schools/>}/>
            <Route path='/event/modules' element={<Modules />}/>
            <Route path='donor' element={<Donor />}/>
            <Route path='/events' element={<Events/>}/>
            <Route path='/ylpa' element={<Ylpa/>}/>
            <Route path='/conference' element={<Conference/>}/>
            <Route path='/after_payment' element={<After_payment/>}/>
           {/* {user && <Route path='/events' element={<Events/>}/>}  */}
           {user && <Route path='/eventSchools' element={<EventsSchools/>}/>}
           {user && <Route path='/donorSubs' element={<DonorSubs/>}/>}
      </Routes>
    </div>
  );
}

export default App;
