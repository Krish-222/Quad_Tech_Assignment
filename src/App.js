// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';
import BookingForm from './components/BookingForm';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
   
    <Router>
    
        
        <Routes>
          <Route path="/" exact element={<ShowList/>} />
          <Route path="/show-summary/:id" element={<ShowSummary/>} />
          <Route path="/book-ticket/:id" element={<BookingForm/>} />
        </Routes>

    </Router>
    <Footer/>
    </div>
  );
}

export default App;
