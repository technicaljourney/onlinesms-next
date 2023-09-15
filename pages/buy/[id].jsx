import React from 'react'
import { Container, Row } from 'react-bootstrap'

// layout
import Layout from "../../src/layout/layout"

// section
import Buydetail from '../../src/sections/buy/details';

const BuyDetail = () => {
    return (
        <>
            <Layout>
                <Container className="buy-detail">
                    <Row>
                        <Buydetail />
                    </Row>
                </Container>
            </Layout>
        </>
    )
}

export default BuyDetail