import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  
  function handleTouchStart(e) {
      setTouchStart(e.targetTouches[0].clientX);
  }
  
  function handleTouchMove(e) {
      setTouchEnd(e.targetTouches[0].clientX);
  }
  
  function handleTouchEnd() {
      if (touchStart - touchEnd > 150) {
          // do your stuff here for left swipe
          moveSliderRight();
      }
  
      if (touchStart - touchEnd < -150) {
          // do your stuff here for right swipe
          moveSliderLeft();
      }
  }

  return (
    <div>
    </div>
  );
}
