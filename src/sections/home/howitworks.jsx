import React, { useState, useEffect } from "react";

import { Container, Row, Col, Button, Tab, Tabs } from 'react-bootstrap'

const HowItWorks = () => {

    const [key, setKey] = useState('home');
    const [howItWorks, setHowItWorks] = useState([]);

    useEffect(() => {
        const data = [
            {
                title: "SMS | Text",
                videoTitle: "SMS/Text Verification Video Guide | www.textverified.com",
                src: "https://www.youtube.com/embed/fg8TchMenLQ",
                key: "home"
            },
            // {
            //     title: "Voice",
            //     videoTitle: "Voice Verification Video Guide | www.textverified.com",
            //     src: "https://www.youtube.com/embed/KGWh0VCeXuw",
            //     key: "profile"
            // },
            // {
            //     title: "Rentals",
            //     videoTitle: "Longterm Rental Numbers Video Guide | www.textverified.com",
            //     src: "https://www.youtube.com/embed/fQ5zXeUgVkU",
            //     key: "contact"
            // },
            {
                title: "Other Features",
                videoTitle: "Additional Features Video Guide | www.textverified.com",
                src: "https://www.youtube.com/embed/jYhQJ8mhH0U",
                key: "other"
            }
        ]
        setHowItWorks(data)
    }, [])

    return (
        <>
            < div className="how-its-work" >
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="works-tabs">
                                <h4>How it Works</h4>
                            </div>
                            <div className="Tabs-Content">
                                <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}
                                    className="mb-3"
                                >
                                    {
                                        howItWorks.map((item, index) => {
                                            return (
                                                <Tab eventKey={item.key} title={item?.title} key={index}>
                                                    <iframe width="900" height="506"
                                                        src={item?.src}
                                                        title={item?.videoTitle}
                                                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                                                    </iframe>
                                                </Tab>
                                            )
                                        })
                                    }
                                </Tabs>
                            </div>
                            <div className="work-btn">
                                <Button className="white-btn">LEARN MORE</Button>
                                <Button className="Black-btn">GET STARTED</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >

        </>
    )
}

export default HowItWorks;