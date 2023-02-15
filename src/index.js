import React from 'react'
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import App from './App'
import Store from './app/Store';
import 'antd/dist/reset.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { HomePage,CryptoDetails,Cryptocurrencies,Exchange } from './components';
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
                path: '/crypto/:coinId',
                element: <CryptoDetails />
            },
           

        ],
    },
   
   
   
   
   
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store ={Store}>
        <RouterProvider router={router} />
    </Provider>
  
)