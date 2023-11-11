import React from 'react';
import Navbar from './Components/landingpage/utils/nav';
import LandingPage from './Components/landingpage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './Components/auth/auth';
import MovieDetails from './Components/bookseatsinterface/intermediate';
import { HashRouter,Routes,Route } from 'react-router-dom';
import BookTickets from './Components/bookseatsinterface/bookingcomponents/booktickets';
import FAQ from './Components/others/faq';
function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/auth' element={<Auth />} />
        <Route path='/moviedetails/:id' element={<MovieDetails />} />
        <Route path='/booktickets/:movie_id' element={<BookTickets />} />
        <Route path='/FAQ' element={<FAQ/>}/>
      </Routes>
    </HashRouter>
  );
}
export default App;