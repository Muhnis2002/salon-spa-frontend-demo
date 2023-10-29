import React from "react";
import "./Contents.css";

function Contents() {
  return (
    <div className="Contents">
      <div className="About">
        <div className="SpaTitle">
          <h1>
            Dreadlocks
            <br />
            Salon & Spa
          </h1>
        </div>
        <div className="Details">
          <p>
            "Discover a unique oasis of relaxation and style at our dreadlock
            salon and spa. Our expert stylists specialize in creating and
            maintaining stunning dreadlocks, providing a transformative
            experience for your hair. Step into our tranquil space and indulge
            in a world of beauty, wellness, and natural hair care."
          </p>
        </div>
        <button className="LearnMoreBtn">LEARN MORE</button>
      </div>
      <div className="Services">
        <div className="ServDesc">
          <p>
            "Our salon and spa offer a range of exceptional services to cater to
            your hair and wellness needs. From professional dreadlock creation
            and maintenance, precision haircuts, and intricate styling, we're
            dedicated to enhancing your unique look. Additionally, our spa
            services provide the perfect escape, offering soothing massages,
            rejuvenating facials, and a full spectrum of relaxation and
            self-care experiences."
          </p>
        </div>
      </div>
    </div>
  );
}
export default Contents;
