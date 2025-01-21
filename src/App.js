import { useAuthContext } from './components/hooks/useAuthContext'
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Partnership from './components/Partnership'
import Participate from './components/participate'
import Schools from './components/Schools';
import AffiliationForm from './components/affiliationForm';
import Certificate from './components/Certificate.js'

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
import Privacy_Policy from './components/Privacy_Policy';
import TandC from './components/TandC';
import Refund_Policy from './components/Refund_Policy';
import ContactUs from './components/ContactUs';
import MyLearning from './components/myLearning';
import Login from './components/Login';
import Register2 from './components/Register2';
import Register from './components/Register';
import OnDemand from './components/OnDemand';
import PaymentSucces from './components/PaymentSuccess';
import Forgot from './components/Forgot';
import ResetPassword from './components/ResetPassword';
import YlpCourse from './components/YlpCourse';
import { Toaster } from 'react-hot-toast';
import WorkWithUs from './components/WorkWithUs';
import IM2024Winners from './components/IM2024Winners';
const cors = require('cors')({ origin: true });


function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/partners' element={<Partnership />} />
        <Route path='/participate' element={<Participate />} />
        {/* <Route path='/join' element={<JoinUs/>}/> */}
        <Route path='/team' element={<Team />} />
        {/* <Route path='/mylearning' element={<MyLearning />} /> */}
        <Route path='/affiliates' element={<Affiliates />} />
        <Route path='/colleges' element={<Collges />} />
        <Route path='/schools' element={<Schools />} />
        <Route path='/event/modules' element={<Modules />} />
        <Route path='donor' element={<Donor />} />
        <Route path='/events' element={<Events />} />
        <Route path='/ylp' element={<Ylpa />} />
        <Route path='/conference' element={<Conference />} />
        <Route path='/privacy-policy' element={<Privacy_Policy />} />
        <Route path='/terms-policy' element={<TandC />} />
        <Route path='/refund-policy' element={<Refund_Policy />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/work' element={<WorkWithUs />} />
        <Route path='/2024-winners' element={<IM2024Winners />} />
        <Route path='/affiliationForm' element={<AffiliationForm/>}/>
        <Route path='/affiliation_certificate' element={<Certificate/>}/>


        {/* <Route path='/after_payment' element={<After_payment/>}/> */}
        {/* {user && <Route path='/events' element={<Events/>}/>}  */}
        {user && <Route path='/eventSchools' element={<EventsSchools />} />}
        {user && <Route path='/donorSubs' element={<DonorSubs />} />}

        {/* Testing Routes */}
        {/* <Route path='/login' element={<Login />} /> 
        <Route path='/register' element={<Register />} /> 
        <Route path='/register-otp' element={<Register2 />} /> 
        <Route path='/paymentsuccess' element={<PaymentSucces />} /> 
        <Route path='/ondemand' element={<OnDemand />} /> 
        <Route path='/forgot-password' element={<Forgot />} /> 
        <Route path='/reset-password/:resetToken' element={<ResetPassword />} /> 
        <Route path='/ylp-course' element={<YlpCourse />} />  */}
      </Routes>
    </div>
  );
}

export default App;
