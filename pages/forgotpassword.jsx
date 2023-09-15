import React from "react";
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import Image from "next/image";
// import LockImg from "../src/assets/images/lock.png";
import Logo from "../src/assets/images/logoblue.png";
import User1 from "../src/assets/images/user1.jpg";
import User2 from "../src/assets/images/user2.jpg";
import User3 from "../src/assets/images/user3.jpg";
import User4 from "../src/assets/images/user4.jpg";
import imageLoader from "../src/utilities/imageLoader";
import Link from "next/link";
import Layout from "../src/layout/layout";

const ResetPassword = () => {
    return (
        <>
            <Layout>
                <div className="box-shadow">
                    <Container fluid>
                        <Row className="align-items-center justify-content-center">
                            <Col lg={6}>
                                <div className="forgotpassword-page">
                                    <div>
                                        <h4>Forgot password?</h4>
                                        <p>Fill the form to reset your password</p>
                                    </div>
                                    <Form className="forgot-form">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Email" className="form-input" />
                                        </Form.Group>

                                        <Form.Group className="mt-1 mb-1 justify-content-center d-flex">
                                            <Button variant="primary" type="submit" className="btn Black-btn me-3">send reset link</Button>
                                        </Form.Group>
                                        <Form.Group className="links text-center">
                                            <span>Return to <Link href="/login" className="d-inline-block">Sign in </Link></span>
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </Layout>
        </>
    )
}

export default ResetPassword;