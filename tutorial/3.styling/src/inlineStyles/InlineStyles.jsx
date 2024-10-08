import React from "react";

const InlineStyles = () => {
  const divStyles = { 
    backgroundColor: "lightcyan",
    color: "darkblue",
    padding: "1rem",
    marginBottom: "2rem",
  };

  return (
    <div style={divStyles}>
      <h1 style={{color: "brown"}}>this is inline styling</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores porro,
        possimus officiis ut nobis iure deserunt iste. Distinctio, voluptatum
        eius soluta dolorem nesciunt eveniet, facilis quam sit a enim
        voluptates?
      </p>
    </div>
  );
};

export default InlineStyles;
