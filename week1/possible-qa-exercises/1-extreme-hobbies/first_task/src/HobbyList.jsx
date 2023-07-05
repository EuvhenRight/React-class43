import React from 'react';
import Hobby from './Hobby';
const HobbyList = ({ hobbies }) => {
  return (
    <div>
      {hobbies.map((hobby, index) => {
        return <Hobby hobby={hobby} key={index} />;
      })}
    </div>
  );
};

export default HobbyList;
