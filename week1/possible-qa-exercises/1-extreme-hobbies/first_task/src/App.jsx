import './App.css';
import HobbyList from './HobbyList';

const App = () => {
  const hobbies = [
    'Surfing',
    'Rock climbing',
    'Mountain biking',
    'Breakdancing',
  ];

  return (
    <div className="App">
      <h1>My Hobby</h1>
      <HobbyList hobbies={hobbies} />
    </div>
  );
};

export default App;
