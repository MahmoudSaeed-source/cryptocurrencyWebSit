import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App'
import 'antd/dist/reset.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { HomePage,CryptoDetails,Cryptocurrencies,News,Exchange } from './components';
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/cryptocurrencies',
                element: <Cryptocurrencies />
            },
            {
                path: '/exchange',
                element: <Exchange />
            },
            {
                path: '/cryoto/:coinId',
                element: <CryptoDetails />
            },
            {
                path: '/news',
                element: <News />
            },

        ],
    },
   
   
   
   
   
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router = { router }/>
)