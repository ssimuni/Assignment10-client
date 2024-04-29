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
import PrivateRoute from "./routes/PrivateRoute";
import ArtList from './components/ArtList.jsx';
import AboutUs from './components/AboutUs.jsx';
import Feedback from './components/Feedback.jsx';
import Details from './components/Details.jsx';
import Update from './components/Update.jsx';



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
      element: <PrivateRoute><AddArt></AddArt></PrivateRoute>,
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    },
    {
      path: '/artlist',
      element: <PrivateRoute><ArtList></ArtList></PrivateRoute>,
      loader: () => fetch('http://localhost:5000/newart')
    },
    {
      path: '/about',
      element: <AboutUs></AboutUs>
    },
    {
      path: '/feedback',
      element: <Feedback></Feedback>
    },
    {
      path: '/details/:_id',
      element: <PrivateRoute><Details></Details></PrivateRoute>,
      loader: () => fetch('http://localhost:5000/newart')
    },
    {
      path: '/update/:id',
      element: <PrivateRoute><Update></Update></PrivateRoute>,
      loader: ({ params }) => fetch(`http://localhost:5000/newart/${params.id}`)
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
