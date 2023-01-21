import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MyNavbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: '/projects',
    element: <Projects/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: '/contact',
    element: <Contact/>
  },
]);

const App = () => {
  return (
    <div style={style}>
      <MyNavbar/>
      <RouterProvider router={router} />
    </div>
  );
};

const style = {
  backgroundColor: '#283046',
  backgroundSize: "cover",
  height: '100vh'
}

export default App;
