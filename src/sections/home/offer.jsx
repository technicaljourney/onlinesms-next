import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { ArrowRight, CheckCircleFill, FileLock2Fill, GearFill } from 'react-bootstrap-icons';

const Offer = () => {

    const [offers, setOffers] = useState([]);

    useEffect(() => {
        const data = [
            {
                title: "Verify",
                icon: <CheckCircleFill />,
                about: [
                    "Bypass phone verifications and sms verifications",
                    "Bypass phone call & voice verifications",
                    "Real US numbers for all major online platforms and mobile apps",
                    "Longterm numbers & rentals support"
                ],
                bottom: "Simple"
            },
            {
                title: "Featured",
                icon: <FileLock2Fill />,
                about: [
                    "Use our numbers to protect your privacy — do not give out yours",
                    "Do not let companies resell your personal info",
                    "Strong encryption for all online sessions",
                    "Cryptocurrency accepted"
                ],
                bottom: "Secure"
            },
            {
                title: "Automate",
                icon: <GearFill />,
                about: [
                    "API Access + dedicated support",
                    "Integrate and scale your application",
                    "Complete API reference",
                    "Bulk discounts available"
                ],
                bottom: "Streamlined"
            },
        ]

        setOffers(data)
    }, []);

    return (
        <>
            < div className="offer-sec" >
                <Container>
                    <Row>
                        <div className="title">
                            <h4>What we offer?</h4>
                        </div>
                        {
                            offers?.map((item, index) => {
                                return (
                                    <Col md={4} className="offer-card" key={index}>
                                        <Card className="text-center" style={{ height: "100%", margin: "0 15px" }}>
                                            <Card.Header>{item.icon}{item.title}</Card.Header>
                                            <Card.Body>
                                                {
                                                    item?.about?.map((item, index) => {
                                                        return (
                                                            <Card.Text key={index}> <ArrowRight /> {item}</Card.Text>
                                                        )
                                                    })
                                                }

                                            </Card.Body>
                                            <Card.Footer className="text-muted">{item?.bottom}.</Card.Footer>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                        <div className="work-btn">
                            <Button className="Black-btn">LEARN MORE</Button>
                        </div>
                    </Row>
                </Container>
            </div >
        </>
    )
}

export default Offer;