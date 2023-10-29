// Profiles.js
import React from 'react';

function Profiles() {
  return (
    <div className="profiles">
      <div className="profile">
      <img src="/images/JohnDoe.jpg" alt="John Doe" />
        <div className="social-media">
          <a href="social-media-link-1" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="social-media-link-2" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          {/* Add more social media icons as needed */}
        </div>
      </div>
      {/* Add more profiles as needed */}
    </div>
  );
}

export default Profiles;
