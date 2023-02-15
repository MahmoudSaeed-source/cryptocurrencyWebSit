import React from 'react'
import { Layout,Typography,Space } from 'antd';
import {Navbar } from './components'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './App.css'
const App = () => {
  return (
      <div className='app'>
          <div className='navbar'>
          <Navbar/>
          </div>
          <div className='main'>
            <Layout>
                  <div className='routes'>
                      <Outlet />
                  </div>
            </Layout>
        
          <div className='footer'>
              <Typography.Title level={5} style={{color:'white' ,textAlign:'center'}}>
                  Cryptocurrency
                  @All Right Reservers 
              </Typography.Title   >
              <Space>
                  <Link to='/'>Home</Link>
                  <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                  <Link to='/exchange'>Exchange</Link>
                </Space>
        </div>
      </div>
   </div>
  )
}

export default App