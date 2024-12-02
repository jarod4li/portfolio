import React from 'react';
import './App.css';

function App() {
  const posts = [
    { imgSrc: 'https://via.placeholder.com/300', caption: 'First post caption' },
    { imgSrc: 'https://via.placeholder.com/300', caption: 'Second post caption' },
    { imgSrc: 'https://via.placeholder.com/300', caption: 'Third post caption' },
    { imgSrc: 'https://via.placeholder.com/300', caption: 'Fourth post caption' },
    { imgSrc: 'https://via.placeholder.com/300', caption: 'Fifth post caption' },
    { imgSrc: 'https://via.placeholder.com/300', caption: 'Sixth post caption' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Instagram-style Grid</h1>
        <div className="grid">
          {posts.map((post, index) => (
            <div key={index} className="square">
              <img src={post.imgSrc} alt={`Post ${index + 1}`} />
              <div className="caption">{post.caption}</div>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
