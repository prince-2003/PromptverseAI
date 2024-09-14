import React, { useState, useEffect } from 'react';
import Textbox from './textbox';

function Infinitescroll({ delay }) {
  const [textboxCount, setTextboxCount] = useState(1); 

  
  const updateTextboxCount = () => {
    const screenWidth = window.innerWidth;
    
    
    if (screenWidth >= 1200) {
      setTextboxCount(6);
    } else if (screenWidth >= 900) {
      setTextboxCount(5);
    } else if (screenWidth >= 600) {
      setTextboxCount(4);
    } else {
      setTextboxCount(3);
    }
  };

  
  useEffect(() => {
    updateTextboxCount(); 
    window.addEventListener('resize', updateTextboxCount);

    
    return () => window.removeEventListener('resize', updateTextboxCount);
  }, []);

  
  const textboxes = Array.from({ length: textboxCount }, (_, index) => (
    <Textbox
      key={index} 
      className={`relative transition-transform duration-[600ms] transform group-hover:translate-y-0`}
      prompt="Write an attractive hero title for the following website"
      url="www.google.com"
    />
  ));

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className="flex gap-2 animate-scroll-x"
        style={{ animationDelay: `${delay}ms` }}
      >
        {textboxes}
      </div>
    </div>
  );
}

export default Infinitescroll;
