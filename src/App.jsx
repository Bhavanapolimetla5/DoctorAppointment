import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Doctors from './pages/Doctors.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import Phone from './pages/Phone.jsx'
import Myprofile from './pages/Myprofile.jsx'
import MyAppointments from './pages/MyAppointments.jsx'
import Appointment from './pages/Appointment.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Signup from './pages/Signup.jsx'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/doctors" element={<Doctors />} />
        <Route path ='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/contact' element = {<Phone/>}/>
        <Route path='/my-profile' element = {<Myprofile/>}/>
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path = '/appointment/:docId' element={<Appointment/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
