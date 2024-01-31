import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../styles/show-list.css"

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        console.log(response);
        setShows(response.data);
      })
      .catch(error => {
        console.error('Error fetching shows:', error);
      });
      
  }, []);

  return (
    <div >
      {/* <h1>TV Shows</h1> */}
      <ul className='list-of-shows'>
        {shows.map(({ show }) => (
          <li className="show" key={show.id}>
            <Link to={`/show-summary/${show.id}`}>
              <div>
                <img src={show.image?.medium} alt={show.name} />
                <h2>{show.name}</h2>
                <p>{show.type}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
