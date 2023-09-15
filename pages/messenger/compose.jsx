import React from 'react';
import { Container } from 'react-bootstrap';

// layout
import Layout from "../../src/layout/layout";

// section
import MessageCompose from '../../src/sections/messenger/compose';

const Compose = () => {
    return (
        <>
            <Layout>
                <Container className='compose-main'>
                    <MessageCompose />
                </Container>
            </Layout>
        </>
    )
}

export default Compose