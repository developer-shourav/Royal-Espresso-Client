import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCoffee from './components/AddCoffee/AddCoffee.jsx'
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App> </App>
  },
  {
    path: '/addCoffee',
    element: <AddCoffee> </AddCoffee>
  },
  {
    path: '/updateCoffee',
    element: <UpdateCoffee> </UpdateCoffee>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}> 

   </RouterProvider>
  </React.StrictMode>,
)
