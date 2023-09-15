import React from 'react'
import { Col, Container, Row, Tabs, Tab } from 'react-bootstrap'
import Cryptocurrencies from './cryptocurrencies'
import Usdcuurrencies from './usdcuurrencies'

const BuyTabs = () => {
    return (

        <div className='buysection'>
            <Container>
                <Row>
                    <Col className="col-12 text-center my-5">
                        <div className='mess-cripto border px-4 py-2 d-inline-block'>We plan on restoring ETH, USDT(TRC20/ERC20), and USDC next week. We also plan on supporting XMR in the near future</div>
                    </Col>
                    <Col>
                        <Tabs
                            defaultActiveKey="home"
                            transition={false}
                            id="noanim-tab-example"
                            className="mb-3 buytab"
                        >
                            <Tab eventKey="home" title="Buy with Cripto">
                                <Cryptocurrencies />
                            </Tab>
                            <Tab eventKey="buywithusd" title="Buy with USD($)">
                                <Usdcuurrencies />
                            </Tab>
                            <Tab eventKey="orderhistory" title="Order History">
                                History
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BuyTabs