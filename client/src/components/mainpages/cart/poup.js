import React from "react";
import "./popup.css";
export const Popup = ({ text, closePopup }) => {
  return (
    <div className="popup-container">
        
     <div className="popup-body">
     <button onClick={closePopup}>Close X</button>
      <h1>{text}</h1>
      
     </div>
    </div>
  );
};