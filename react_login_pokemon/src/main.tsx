

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './App';
// import CardView from './components/CardView';
import HomeView from './pages/HomeView';
import CrudTable from './pages/CrudTable';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView/>,
  },
  {
    path: "editor",
    element: <App/>,
  },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

