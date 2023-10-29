import React from "react";
import "./Profiles.css";

function Profiles({ imageSrc, altText, Name }) {
  return (
    <div className="ProfileBox">
      <div className="ProfileImg">
        <img src={`/assets/${imageSrc}`} alt={altText} />
        <div className="ProfileName">
          <h1>{Name}</h1>
        </div>
        <div className="SocialIcons">
          <img src="/assets/facebook.png" alt="Facebook" />
          <img src="/assets/twitter.png" alt="Twitter" />
          <img src="/assets/instagram.png" alt="Instagram" />
        </div>
      </div>
    </div>
  );
}
export default Profiles;
