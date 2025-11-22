
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navber/Navber';
function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default App



