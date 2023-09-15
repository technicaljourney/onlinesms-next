import React from 'react';
import { Container, Row } from 'react-bootstrap';

// layout
import Layout from "../../src/layout/layout";

// section
import Messages from '../../src/sections/messenger/messages';

const Contact = () => {
    return (
        <>
            <Layout>
                <Container className='contact-main'>
                    <Row>
                      <Messages />
                    </Row>
                </Container>
            </Layout>
        </>
    )
}

export default Contact