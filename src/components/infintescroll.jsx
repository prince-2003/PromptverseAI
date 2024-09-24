import React, { useState, useEffect, useRef } from 'react';
import Textbox from './textbox';

function Infinitescroll({ delay }) {
  const [textboxCount, setTextboxCount] = useState(1); 
  const containerRef = useRef(null); 

  
  const updateTextboxCount = () => {
    const containerWidth = window.innerWidth; 
    const textboxWidth = containerRef.current ? containerRef.current.getBoundingClientRect().width : 300;
    
    const count = Math.floor(containerWidth / textboxWidth)*2; 
    setTextboxCount((count+1)|| 1);
  };

  useEffect(() => {
    updateTextboxCount(); 
    window.addEventListener('resize', updateTextboxCount); 

    return () => window.removeEventListener('resize', updateTextboxCount); 
  }, []);

  
  const textboxes = Array.from({ length: textboxCount }, (_, index) => (
    <Textbox
      key={index} 
      className={`relative transition-transform duration-300 transform group-hover:translate-y-0`}
      prompt="Write an attractive hero title for the following website"
      url="www.google.com"
      forwardRef={containerRef} 
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
