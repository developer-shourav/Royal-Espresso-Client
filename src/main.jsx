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
    element: <App> </App>,
    loader : () => fetch('http://localhost:7000/coffees')
  },
  {
    path: '/addCoffee',
    element: <AddCoffee> </AddCoffee>
  },
  {
    path: '/updateCoffee/:id',
    element: <UpdateCoffee> </UpdateCoffee>,
    loader : ({params}) => fetch(`http://localhost:7000/coffee/${params.id}`)
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}> 

   </RouterProvider>
  </React.StrictMode>,
)
