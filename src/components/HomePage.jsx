import React from 'react'
import millify from 'millify'
import { Typography,Col,Row,Statistic } from 'antd'
import {Link} from 'react-router-dom'
import { useGetCryptosQuery } from '../Services/CryptoApi'
import { Cryptocurrencies,} from '../components'
const HomePage = () => {
  const { Title } = Typography;
  const { data,isFetching } = useGetCryptosQuery(10)
  const globalStats = data?.data?.stats;
  if(isFetching) return 'isLoading.....;'
  return (
    <>
      <Title level={5} className='heading'>Global Crypto stats</Title>
      <Row>
        <Col span={12}><Statistic title='Total Cryptocurrencies ' value={globalStats.total}/></Col>
        <Col span={12}><Statistic title='Total Exchange ' value={millify(globalStats.totalExchanges) }/></Col>
        <Col span={12}><Statistic title='Total Market Cap ' value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title='Total 24 Volume ' value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title='Total Markets ' value={millify(globalStats.totalMarkets)} /></Col>
      </Row>
      <div className='home-heading-container'>
          <Title level={2} className='home-title'>Top 10 CryPtocurrencies in the World</Title>
          <Title level={4} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className='home-heading-container'>
          <Title level={2} className='home-title'>Latest Crypto News</Title>
          <Title level={4} className='show-more'><Link to='/news'>Show More</Link></Title>
      </div>
    </>
   
  )
}

export default HomePage