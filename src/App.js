import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>
  }
]);

const App = () => {
  return (
    <div>
      <Navbar/>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
