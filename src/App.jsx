import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import ProductView from './pages/productView'
import CartPage from './pages/CartPage'


export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/product-view/:id",
          element: <ProductView/>
        },
        {
          path: "/cart-page",
          element: <CartPage/>
        }
        
      ]
    },
    {

    }
  ])
  return (
  <RouterProvider router={router} />
  )
}
