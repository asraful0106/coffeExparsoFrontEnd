import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddNewCoffee from './pages/addNewCoffee/AddNewCoffee.jsx';
import UpdateCoffee from './pages/updateCoffee/UpdateCoffee.jsx';
import SuccessDetails from './pages/successDetails/SuccessDetails.jsx';
import HomePage from './pages/homePage/HomePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'/',
        element: <HomePage/>,
        loader : () => fetch('http://localhost:5000/coffee')
      },
      {
        path:"/add-new-coffee",
        element: <AddNewCoffee/>,
      },
      {
        path:'/update-coffee/:id',
        element: <UpdateCoffee/>
      },
      {
        path:'/coffee-detail/:id',
        element: <SuccessDetails/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
