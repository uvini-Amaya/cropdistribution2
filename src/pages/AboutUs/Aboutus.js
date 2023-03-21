import React from 'react';
import img2 from "../../Images/img2.jpg";
import "../style for pages/style.css";

function Aboutus() {
  return (
    <div>
        <div >
          <div className="aboutus" style={{ backgroundImage: `url(${img2})` }}></div>
      <p className="aboutusinside">Hello Sri Lanka, we are a newly eshtablished web base community.</p>
    </div>
    </div>
  )
}

export default Aboutus;
