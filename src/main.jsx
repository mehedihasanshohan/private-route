import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './Provider/AuthProvider';
import Home from './components/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/login',
        element : <Login></Login>
      },
      {
        path : '/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: '/',
    element : <Home></Home>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
     <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
