import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import { Home } from './component/Home';
import Manage from './component/Manage Bookings';
import Book from './component/Book';
import Admin from './component/Admin';
import Nav from './component/navbar';
import { HomeUser } from './component/HomeUser';
import PaymentPage from './component/PaymentPage';



// import Villa from './component/Villa';
import VillaListPage from './component/VillaListPage';
import CreateVillaPage from './component/CreateVillaPage';
import EditVillaPage from './component/EditVillaPage';
import DeleteVillaPage from './component/deletepg';
import CreateVillaBarPage from './component/CreateVillaBarPage';
import EditVillaBarPage from './component/EditVillaBarPage';
import BookingForm from './component/BookingForm';


function App() {
  return (
    <><Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/homeuser" element={<HomeUser />} />
        <Route path="/manageBookings" element={<Manage />} />
        <Route path="/booking-form" element={<BookingForm />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/navuser" element={<Nav username/>} />

        <Route path="/book" element={<Book />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/DeleteVillaPage" element={<DeleteVillaPage />} />
     




        {/* Add your other routes here */}

        <Route path="/VillaListPage" element={<VillaListPage />} />
        <Route path="/create-villa" element={<CreateVillaPage />} />
        <Route path="/edit-villa/:id" element={<EditVillaPage />} />
        <Route path="/create-villa-bar" element={<CreateVillaBarPage />} />
        <Route path="/edit-villa-bar/:id" element={<EditVillaBarPage />} />
        
      </Routes>
    </Router></>
  );
}

export default App;
