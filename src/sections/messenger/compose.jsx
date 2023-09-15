import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const MessageCompose = () => {
    return (
        <>
            <h2>Compose</h2>
            <p>If you are contacting us regarding a failed verification, please include all information relating to your verification request (i.e. service requested, number used, time of verification, code provided, screenshots of error messages, etc.)</p>
            <Row>
                <Col className='col-lg-6'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="Bulk purchasing inquiry" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={8} />
                        </Form.Group>
                    </Form>
                    <div>
                        <Button className='btnSend'>Add Image</Button>
                        <Button className='btnSend ms-3'>Send</Button>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default MessageCompose