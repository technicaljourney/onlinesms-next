import React from 'react';
import { Container } from 'react-bootstrap';

// layout
import Layout from "../../src/layout/layout";

// section
import MessageInbox from '../../src/sections/messenger/messages';

const Inbox = () => {
    return (
        <>
            <Layout>
                <Container className='contact-main'>
                    <MessageInbox />
                </Container>
            </Layout>
        </>
    )
}

export default Inbox