import React, { useState } from 'react'
import Link from 'next/link';
import { Button, Col, Container, Row, Form, InputGroup, } from 'react-bootstrap';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

import mastercard from "../../assets/images/mastercard.png"
import visa from "../../assets/images/visa.png"
import pay from "../../assets/images/pay.png"
import crypto from "../../assets/images/crypto.png"
import imageLoader from "../../utilities/imageLoader";

import Image from "next/image";

const cardData = [
    {
        id: 1,
        count: '2.50',
        crypto: crypto,
        pay: '',
        visa: visa,
        master: mastercard,
        status: 'Buy'
    },
    {
        id: 2,
        count: '5.00',
        crypto: crypto,
        pay: '',
        visa: visa,
        master: mastercard,
        status: 'Buy'
    },
    {
        id: 3,
        count: '10.00',
        crypto: crypto,
        pay: '',
        visa: visa,
        master: mastercard,
        status: 'Buy'
    },
    {
        id: 4,
        count: '50.00',
        crypto: crypto,
        pay: '',
        visa: visa,
        master: mastercard,
        status: 'Buy'
    },
    {
        id: 5,
        count: '100.00',
        crypto: crypto,
        pay: '',
        visa: visa,
        master: mastercard,
        status: 'Buy'
    },
]


const Usdcuurrencies = () => {
    const [value, setValue] = useState(5);

    return (
        <>
            <Container>
                <Row>
                    <Col className='usd-detail col-12'>
                        <Row className='justify-content-center mt-4 mb-5'>
                            {cardData.map((item, key) => {
                                return (
                                    <Col className="col-12 col-sm-6 col-md-4 mb-4" key={key}>
                                        <div className='usd-card'>
                                            <div className='bg-secondary d-flex align-items-center justify-content-center'>{item.count} x
                                                <Image
                                                    src={item.crypto}
                                                    loader={imageLoader}
                                                    layout="fill"
                                                    alt=""
                                                    className='ms-2'
                                                />
                                            </div>
                                            <div className='d-flex justify-content-center py-2'>
                                                <Image
                                                    src={item.visa}
                                                    loader={imageLoader}
                                                    layout="fill"
                                                    alt="" />
                                                <Image
                                                    src={item.master}
                                                    loader={imageLoader}
                                                    layout="fill"
                                                    alt=""
                                                    className='ms-4'
                                                />
                                            </div>
                                            <div className="bg-buy text-center py-2">
                                                <Link href={`/buy/${item.id}`}><a>{item.status}</a></Link>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })}



                            <Col className="col-12 col-sm-6 col-md-4 mb-4" >
                                <div className='usd-card'>
                                    <div className='bg-secondary d-flex align-items-center justify-content-center'>Need More? x
                                        <Image
                                            src={crypto}
                                            loader={imageLoader}
                                            layout="fill"
                                            alt=""
                                            className='ms-2'
                                        />
                                    </div>
                                    <div className='d-flex justify-content-center py-2'>
                                        <Image
                                            src={visa}
                                            loader={imageLoader}
                                            layout="fill"
                                            alt="" />
                                        <Image
                                            src={mastercard}
                                            loader={imageLoader}
                                            layout="fill"
                                            alt=""
                                            className='ms-4'
                                        />
                                    </div>
                                    <div className="bg-buy text-center py-2">
                                        <Link href="/messenger/compose"><a>Contact Us</a></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='col-12'>
                        <div className="line-after"><h2>OR</h2></div>
                    </Col>
                    <Col className='img-sect d-flex col-12 justify-content-center my-3'>
                        <Image
                            src={visa}
                            loader={imageLoader}
                            layout="fill"
                            alt="" />
                        <Image
                            src={mastercard}
                            loader={imageLoader}
                            layout="fill"
                            alt=""
                            className='ms-4'
                        />
                    </Col>
                    <Col className='col-12 mb-3'>
                        <Row className='d-flex justify-content-center range-slide'>
                            <Col className='col-9 col-md-7'>
                                <RangeSlider
                                    value={value}
                                    min={2.5}
                                    max={100}
                                    step={0.01}
                                    onChange={changeEvent => setValue(changeEvent.target.value)}
                                />
                            </Col>
                            <Col className='col-3 col-sm-2 col-md-1'>
                                <Button className="bluebtn">
                                    Buy
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='col-12 col-lg-6 m-auto p-0'>
                        <div className="searchbox mb-5">
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Enter the $ amount to purchase in increments of 2.5"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    className="form-input" />
                                <InputGroup.Text id="basic-addon2" className="p-0 bg-remove">
                                    <Button className="bluebtn">
                                        Buy
                                    </Button>
                                </InputGroup.Text>
                            </InputGroup>
                        </div>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Usdcuurrencies;