import React from 'react';
import './App.css';

function App() {
  const title = 'Amazing Poster';
  const description = 'This is an example of a poster description that will later come from the backend.';
  const imageUrl = 'https://via.placeholder.com/300x200.png?text=Poster+Image';

  return (
    <div className="poster-container">
      <h1 className="poster-title">{title}</h1>
      <img className="poster-image" src={imageUrl} alt="Poster" />
      <p className="poster-description">{description}</p>
      <button className="poster-submit">Submit</button>
    </div>
  );
}

export default App;
