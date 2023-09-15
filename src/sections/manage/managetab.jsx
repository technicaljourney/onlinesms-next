import React from 'react'
import { Container, Row, Col, Tabs, Tab, Button, Form } from 'react-bootstrap'
import Password from './password'
import Profile from './profile'
import Image from "next/image";
import imageLoader from "../../utilities/imageLoader";
import Google from "../../assets/social/google.png";

const ManageTab = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div className='managetab-sec'>
                            <h4>Manage your account</h4>
                            <h5>Change your account settings</h5>
                            <div className='sidebartab'>
                                <Tabs
                                    defaultActiveKey="home"
                                    transition={false}
                                    id="noanim-tab-example"
                                    className="mb-3"
                                >
                                    <Tab eventKey="home" title="Profile">
                                        <Profile />
                                    </Tab>
                                    <Tab eventKey="password" title="Password">
                                        <Password />
                                    </Tab>
                                    <Tab eventKey="externallogins" title="External Logins">
                                        <div className='external-login-sec'>
                                            <h4>Add another service to log in</h4>
                                            <Button className="btn social-btn btn-primary">
                                                <div className="svg-icon">
                                                    <Image
                                                        src={Google}
                                                        loader={imageLoader}
                                                        layout="fill"
                                                        className="img-fluid mosaic-1"
                                                        alt=""
                                                    />
                                                </div>
                                                <span>Continue with Google</span>
                                            </Button>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="twofactor" title="Two-factor authentication">
                                        <div className='authentication-section'>
                                            <h4>Two-factor authentication</h4>
                                            <h5>Authenticator app</h5>
                                            <div className='authentication-btn d-flex'>
                                                <Button
                                                    variant="primary"
                                                    type="submit"
                                                    className="btn Black-btn me-3"
                                                >
                                                    Configure authenticator app
                                                </Button>
                                                <Button
                                                    variant="primary"
                                                    type="submit"
                                                    className="btn white-btn me-3"
                                                >
                                                    Reset authenticator key
                                                </Button>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="alert" title="Alerts & Notification">
                                        <div className='alert-section'>
                                            <h4>Low Balance Alert</h4>
                                            <Form className="mt-3 col-lg-4">
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Alert if balance below:</Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        placeholder=""
                                                        className="form-input"
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                    <Form.Check
                                                        type="checkbox"
                                                        label="Enable Notifications?"
                                                    />
                                                </Form.Group>
                                                <Form.Group className="">
                                                    <Button
                                                        variant="primary"
                                                        type="submit"
                                                        className="btn Black-btn"
                                                    >
                                                        Save
                                                    </Button>
                                                </Form.Group>
                                            </Form>
                                        </div>
                                    </Tab>
                                </Tabs>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>

    )
}
export default ManageTab