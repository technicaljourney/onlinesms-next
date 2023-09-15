import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

// layout
import Layout from "../../src/layout/layout"

// section
import BuyTabs from '../../src/sections/buy/buytabs'


const Buy = () => {
    return (
        <>
            <Layout>
                <Container>
                    <Row>
                        <Col>
                            <BuyTabs />
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </>
    )
}

export default Buy