import './App.css';
import React from 'react';
import Guarantee from './Guarantee';
import chat from './chat.png';
import coin from './coin.png';
import description from './f-delivery.png';

function App() {
  return (
    <div className="App">
      <Guarantee
        img={chat}
        title="Online support 24/7"
        description="text text text text text text text text text"
      />
      <Guarantee
        img={coin}
        title="100% money back"
        description="text text text text text text text text text"
      />
      <Guarantee
        img={description}
        title="Free shipping"
        description="text text text text text text text text text"
      />
    </div>
  );
}

export default App;
