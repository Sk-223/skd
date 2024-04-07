import React from 'react';
import './App.css'; // Import your CSS file here
import Header from './components/Header/Header';
import About from './components/About/About'; 

function App() {
  return (
    <div className="App">
      <Header />
      <About />
    </div>
  );
}

export default App;
