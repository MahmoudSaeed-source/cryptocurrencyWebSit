import React from 'react'
import { Button,Menu,Typography,Avatar } from 'antd';
import { HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Icon from '../images/cryptocurrency.png'

const Navbar = () => {
  return (
      <div className="nav-container">
          <div className="logo-container">
        <Avatar src={Icon} size='large' />
              <Typography.Title level={2} className='logo'>
              <Link to='/'>Crytoverse</Link>
              </Typography.Title>
          </div>
          <Menu theme='dark'>
              <Menu.Item icon={<HomeOutlined />}>
                  <Link to = '/'>Home</Link>
            </Menu.Item>
              <Menu.Item icon={<FundOutlined />}>
                  <Link to= '/cryptocurrencies'>Cryptocurrencies</Link>
            </Menu.Item>
              <Menu.Item icon={<MoneyCollectOutlined />}>
                  <Link to= '/exchange'>Exchange</Link>
            </Menu.Item>
           
      </Menu>
   
    </div>
  )
}

export default Navbar