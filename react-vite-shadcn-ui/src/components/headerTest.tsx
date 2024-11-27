
import React, { useState, useEffect } from "react";


export const Bar = () => {
  const [scrolled, setScrolled] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 50) {
        setScrolled(true); 
      } else {
        setScrolled(false); 
      }
    };

    
    window.addEventListener("scroll", handleScroll);

    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(10px)",
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.5)", 
        padding: "10px 20px", 
        border: "1px solid rgba(0, 0, 0, 0.1)",
        borderRadius: "5%",
      }}
    >
     
      <nav>
        <ul style={{ display: "flex", gap: "20px" }}>
          <li>
            <a href="#post">Post</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

