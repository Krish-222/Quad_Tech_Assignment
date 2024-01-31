import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import '../styles/show-summary.css';

const ShowSummary = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => {
        setShow(response.data);
      })
      .catch(error => {
        console.error('Error fetching show summary:', error);
      });
  }, [id]);

  return (
    <div className="wrapper">
      {show && (
        <div className="movie-details">
          <div className="image-container">
            <img src={show.image?.medium} alt={show.name} />
          </div>
          <div className="text-container">
            <h1>{show.name}</h1>
            <p>{show.type}</p>
            <p>{show.language}</p>
            <p>Status: {show.status}</p>
            <p>Genres: {show.genres.join(', ')}</p>
            <p>Runtime: {show.runtime} minutes</p>
            <p>Premiered: {show.premiered}</p>
            <p className="summary">{show.summary.replace(/<[^>]+>/g, '')}</p>
            <Link to={`/book-ticket/${id}`} className="book-ticket-button">
              Book Ticket
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowSummary;
