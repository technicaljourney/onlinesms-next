import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

// layout
import Layout from '../src/layout/layout'

// section
import FeaturesTabs from '../src/sections/features/featurestabs'

const Features = () => {
    return (
        <Layout>
            <div className='feature-sec'>
                <Container>
                    <Row>
                        <div className='feature-sec-tab'>
                            <h4>Features</h4>
                            <p>Textverified offers the use of non-VoIP US phone numbers for account verification, multi-factor authentication, and other needs.</p>
                        </div>
                        <FeaturesTabs />
                    </Row>
                </Container>
            </div>
        </Layout>
    )
}

export default Features