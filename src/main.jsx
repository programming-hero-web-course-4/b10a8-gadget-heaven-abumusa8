import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import Detils from './Detils/Detils';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "product/:id", // প্রোডাক্টের ডিটেইল পেইজের জন্য ডায়নামিক পাথ
        // element: <ProductDetails />,
      },
      {
        path: "/detils", // কন্টাক্ট পেইজের জন্য সাব-পাথ
        element: <Detils></Detils>, // আপনার Contact কম্পোনেন্ট
      },
    ],
  },
  {
    path: "/dashboard",
    // element: <Dashboard />, // আপনার Dashboard কম্পোনেন্ট
  },
  {
    path: "/wishlist",
    // element: <Wishlist />, // আপনার Wishlist কম্পোনেন্ট
  },
  // অন্যান্য রাউট
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
