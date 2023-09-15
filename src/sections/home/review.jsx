import React, { useState, useEffect } from "react";
import Image from "next/image";

import { Container, Row, Col, Button, Card } from 'react-bootstrap'

// images
import ClientImg from "../../assets/images/client.png";
import ClientImg2 from "../../assets/images/client2.png";
import ClientImg3 from "../../assets/images/client3.png";
import ClientImg4 from "../../assets/images/client4.png";
import ClientImg5 from "../../assets/images/client5.png";
import imageLoader from "../../utilities/imageLoader";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const data = [
            {
                profile: ClientImg,
                content: "I have been using OnlineSMS non-VoIP real US numbers for several weeks now. It gives me peace of mind when ordering food and rideshares to know that I am not giving my real number to strangers! Easy to bypass text verifications and protect my privacy.",
            },
            {
                profile: ClientImg2,
                content: "Literally took me 2 minutes to create a new anonymous Twitter & Discord using your temporary phone verification service. Good job, guys.",
            },
            {
                profile: ClientImg3,
                content: "This is hands-down the best tool to bypass sms verifications. My transactions go through really quick and my balance is always updated right away. Their support team is great."
            },
            {
                profile: ClientImg4,
                content: "I love OnlineSMS's disposable temporary numbers. I use their services for everything: bypass voice, sms, text verifications. They are responsive when you have a problem with the service. A+",
            },
            {
                profile: ClientImg5,
                content: "OnlineSMS provides the highest quality numbers. The numbers are always non-VoIP real US numbers which means I can bypass phone verification for any service. Love the flexibility!",
            },
        ]
        setReviews(data)
    }, [])

    return (
        <>
            < div className="review-sec" >
                <Container>
                    <Row>
                        <Col>
                            <h4>What customers are saying</h4>
                        </Col>
                        <Col>
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={3}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    767: {
                                        slidesPerView: 1,
                                    },
                                    990: {
                                        slidesPerView: 2,
                                    },
                                    1170: {
                                        slidesPerView: 3,
                                    },
                                }}
                                // navigation
                                pagination={{ clickable: true }}
                            >
                                {
                                    reviews?.map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <Card className="client-review">
                                                    <Image alt="" src={item?.profile}
                                                        loader={imageLoader}
                                                        layout="fill" />
                                                    <Card.Body>
                                                        <Card.Text>
                                                            {item?.content}
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>

                            <div className="Button-sec">
                                <Button className="white-btn">FEATURES</Button>
                                <Button className="Black-btn">LEARN MORE</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >
        </>
    )
}

export default Reviews;