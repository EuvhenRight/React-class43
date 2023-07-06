import React from 'react';

const Guarantee = ({ img, title, description }) => {
  return (
    <div>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Guarantee;
