import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap'

const AboutUs = () => {
    return (
        <>
            < div className="about-sec" >
                <Container>
                    <Row className="mx-4">
                        <div className="title">
                            <h4>More about us</h4>
                        </div>
                        <Col md={4}>
                            <Col md={12}>
                                <div className="about-detail">
                                    <p className="text-center">Textverified makes automation easy with API Access and a dedicated support team. Our services can be integrated into your application quickly and reliably, making it easier than ever to scale to your needs.</p>
                                    <p className="text-end footerText mb-0">- We offer a complete API reference and bulk discounts are available for higher volume users</p>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className="about-detail about-second">
                                    <p>All of our phone numbers are real US numbers and we offer our services across all major online platforms and mobile apps. This means that our numbers are non-VoIP and top quality. Plus, if you need a service that we don’t offer, you can request it easily from our site.</p>
                                </div>
                            </Col>
                        </Col>
                        <Col md={4}>
                            <Col md={12}>
                                <div className="about-detail about-second">
                                    <p>Companies resell your personal data every day -- it’s better to use our disposable and temporary phone numbers and avoid data breaches, hacks, and sim-jacking altogether.</p>
                                    <p className="footerText mb-0">We provide strong encryption for all online sessions. We also accept several cryptocurrencies, including Bitcoin, Ethereum, and Litecoin. You won’t have to share your banking or credit card information to rent one of our phone numbers.</p>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className="about-detail">
                                    <p>Textverified is a phone verification service that allows you to bypass phone verifications and receive codes through our website and our app. It’s easy to verify new accounts and enter confirmation codes to access sites with Textverified.</p>
                                </div>
                            </Col>
                        </Col>
                        <Col md={4}>
                            <Col md={12}>
                                <div className="about-detail">
                                    <p className="text-end">Textverified offers: voice verifications, sms verifications, and text verifications. We do this through either short-term rental phone numbers or long-term rental phone numbers for when you need to use the same phone number again.</p>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className="about-detail about-second">
                                    <p className="text-center">When you use a reliable short-term or long-term rental phone number from Textverified, you are protecting your privacy. Don’t give out your personal cell phone number when you can use one of ours instead. Bypass SMS verifications with one click!</p>
                                </div>
                            </Col>
                        </Col>
                        <div className="Button-sec">
                            <Button className="white-btn">SIGN UP</Button>
                        </div>
                    </Row>
                </Container>
            </div >
        </>
    )
}

export default AboutUs;