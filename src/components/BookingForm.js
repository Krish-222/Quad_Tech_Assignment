import React from 'react';
import '../styles/booking-form.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useParams, Link ,useNavigate} from 'react-router-dom';

const BookingForm = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const  [date,setDate]=useState(null);
  const [time,setTime] = useState(null);
  const [ticket,setTicket] = useState(null);
  const [ticketType,setTicketType]=useState(null);
  const navigate=useNavigate();

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => {
        setShow(response.data);
      })
      .catch(error => {
        console.error('Error fetching show summary:', error);
      });
  }, [id]);
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!date || !ticket || !ticketType || !time){
      alert("Please enter all details")
      return;
    }
    localStorage.setItem('ticket-details',JSON.stringify({movieName:show.name,date,time,ticket,ticketType}));
    alert("Tickets Booked Succesfully");
    navigate("/")
  }
  return (
    <div className="booking-form-container">
      <h1>Book Ticket</h1>
      <form >
        <div className="form-group">
          <label htmlFor="movieName">Movie Name:</label>
          <input type="text" id="movieName" name="movieName" value={show?.name} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" onChange={(e)=>setDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" onChange={(e)=>setTime(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="numberOfTickets">Number of Tickets:</label>
          <input type="number" id="numberOfTickets" name="numberOfTickets" min="1" onChange={(e)=>setTicket(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="ticketType">Ticket Type:</label>
          <select id="ticketType" name="ticketType" onChange={(e)=>setTicketType(e.target.value)}>
            <option value="silver">Silver</option>
            <option value="diamond">Diamond</option>
            <option value="gold">Gold</option>
          </select>
        </div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
