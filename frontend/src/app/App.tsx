import React from 'react';
import './App.scss';
import Navbar from '../features/menu/navbar/Navbar';
import Sidebar from '../features/menu/sidebar/Sidebar';

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
