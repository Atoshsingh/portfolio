import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Project from './components/Project'
import Resume from './components/Resume'
import Experience from './components/Experience'
import Home from './components/Home'
import MainHome from './components/MainHome'

function App() {

  const browserRoute = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <MainHome />,
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/project",
          element: <Project />
        },
        {
          path: "/resume",
          element: <Resume />
        },
        {
          path: "/experience",
          element: <Experience />
        },
      ]
    },
  ])
  return (
    <div>
      <RouterProvider router={browserRoute} />
    </div>
  )
}

export default App
