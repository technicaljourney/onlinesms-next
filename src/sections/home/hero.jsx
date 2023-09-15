import React from "react";
import Image from "next/image";

import { Container, Row, Col, Button } from 'react-bootstrap'
import { ImageData1, ImageData2 } from "../../constants/hero";
import imageLoader from "../../utilities/imageLoader";

const Hero = () => {

    return (
        <>
            <div className="banner-section">
                <h4 className="herosec-title">All of our numbers are U.S. based and will work with any service. </h4>
                <Container>
                    <Row className="">
                        <Col md={3}>
                            <div className="text-center mbl-sec">
                                {
                                    ImageData1.map((ImageData, index) => {
                                        return (
                                            <div className="d-inline-block imagestag" key={index}>
                                                <div key={ImageData.id}>
                                                    <Image
                                                        src={ImageData.images}
                                                        loader={imageLoader}
                                                        layout="fill"
                                                        className="img-fluid mosaic-1 me-3"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        )
                                    })}
                            </div>
                        </Col>
                        <Col md={6} className="postition-relative">
                            <div className="middle-section">
                                <h4>No Phone? <span>=</span> No Problem! </h4>
                            </div>
                            <div className="hero-middle-sec">
                                <div className="hero-content">
                                    <p>Verify your accounts now!</p>
                                </div>
                                <div className="Button-sec">
                                    <Button className="white-btn">FEATURES</Button>
                                    <Button className="Black-btn">LEARN MORE</Button>
                                </div>
                                <h6>USA | Non-VoIP | Real Numbers</h6>

                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="text-center mbl-sec">
                                {
                                    ImageData2.map((ImageData, index) => {
                                        return (
                                            <div className="d-inline-block imagestag" key={index}>
                                                <div key={ImageData.id}>
                                                    <Image
                                                        src={ImageData.images}
                                                        loader={imageLoader}
                                                        layout="fill"
                                                        className="img-fluid mosaic-1 me-3"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        )
                                    })}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >
        </>
    )
}

export default Hero;