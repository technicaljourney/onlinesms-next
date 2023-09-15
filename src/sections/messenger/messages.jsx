import React from 'react';
import { Col, Table } from 'react-bootstrap';
import Link from 'next/link';

const Messages = () => {
    return (
        <>
            <Col className='col-12'>
                <div className='d-flex align-items-center justify-content-between mb-1'>
                    <h2>Support Messages</h2>
                    <Link href="/messenger/compose">Compose</Link>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>Timestamp</th>
                            <th>Subject</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </Table>
            </Col>
        </>
    )
}

export default Messages
