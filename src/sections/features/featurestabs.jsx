import React from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import SidebarTabs from './sidebartabs'


const FeaturesTabs = () => {
    return (
        <Container>
            <Row className='mt-4 mb-4'>
                <Col md={12} lg={12}>
                    <SidebarTabs />
                </Col>
            </Row>
        </Container>
    )
}

export default FeaturesTabs