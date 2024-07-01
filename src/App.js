import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';

import Home from './Components/Home';


import AllTrips from './Components/AllTrips.js';
import Trip from './Components/Trip.js';
import Footer from './Components/Footer';
import AllBlogs from './Components/AllBlogs.js';
import ScrollTop from './Components/ScrollTop.js';
import AboutUs from './Components/AboutUs.js';
import Contact from './Components/Contact.js';


function App() {

  return (
    <div className="App">
      <NavBar />
      
      <ScrollTop />
        <Routes>
            <Route path='/' element={<Home />} />
            
            <Route path='/allTours' element={<AllTrips />} />
            <Route path='/trip/:id' element={<Trip />} />
            <Route path="/blogs" element={<AllBlogs />} />
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>

        <Footer />
      
    </div>
  );
}

export default App;
