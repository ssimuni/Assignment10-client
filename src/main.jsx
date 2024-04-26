import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './components/Login.jsx'
import Error from './components/Error.jsx';
import Register from './components/Register.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddArt from './components/AddArt.jsx';
import Home from './components/Home.jsx';
import AuthProvider from './providers/AuthProvider.jsx'
import Root from './layouts/Root.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [{
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('http://localhost:5000/newart')
    },
    {
      path: "/addArt",
      element: <AddArt></AddArt>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
