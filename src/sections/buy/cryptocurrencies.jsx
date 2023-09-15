import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Row, Form, InputGroup, } from 'react-bootstrap';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

import Btcimg from "../../assets/images/btc.svg"
import Ethimg from "../../assets/images/eth.png"
import Usdt from "../../assets/images/usdt.png"
import Ltcimg from "../../assets/images/ltc.png"
import Usdc from "../../assets/images/usdc.png"
import imageLoader from "../../utilities/imageLoader";
import Link from 'next/link'

import Image from "next/image";
import { CaretDownSquareFill } from 'react-bootstrap-icons';

const Cryptocurrencies = () => {
    const min = 2.5;
    const max = 2000;
    const [value, setValue] = useState(2.5);
    const [range, setRange] = useState({ min: min, max: max });
    const [step, setStep] = useState(2.5);

    let stepInfo = { min: min, max: max };

    const calcSteps = () => {
        let cnt = max / step;
        for (let i = 1; i <= cnt; i++) {
            let val = logarithm((i - 1) * step);
            let keyStr = (val / 2000 * 100).toFixed(2).toString() + "%";
            stepInfo = { ...stepInfo, [keyStr.toString()]: Math.min((i-1) * step + min, max)};
        }
        setRange(stepInfo);
        console.log(stepInfo);
    }

    const valueByStep = (incOrDec) => {
        if (incOrDec == "inc") {
            setValue(Math.min(value + step, max));
        } else if (incOrDec == "dec") {
            setValue(Math.max(value - step, min));
        }
    }

    const handleSlider = (value) => {
        setValue(parseInt(value[0]));
    }

    const selectChange = (e) => {
        setStep(parseInt(e.target.value));
        setValue(min);
    }
    
    useEffect(() => {
        calcSteps();
    }, [step])

    useEffect(() => {
        calcSteps();
    }, [])

    const logarithm = (n) => {
        return (n > 1) ? 1 + logarithm(n / 1.003808) : 0;
    }

    return (
        <>
            <Container>
                <Row>
                    <Col className='col-12'>
                        <div className='d-flex justify-content-center align-items-center my-4 d-mobile-block image-slider'>
                            <Link href="#">
                                <div className='payment-imagis'>
                                    <Image
                                        src={Btcimg}
                                        loader={imageLoader}
                                        layout="fill"
                                        alt="" />
                                </div>
                            </Link>
                            <Link href="#">
                                <div className='payment-imagis'>
                                    <Image
                                        src={Ltcimg}
                                        loader={imageLoader}
                                        layout="fill"
                                        alt=""
                                    />

                                </div>
                            </Link>
                            <Link href="#">
                                <div className='payment-imagis'>
                                    <Image
                                        src={Ethimg}
                                        loader={imageLoader}
                                        layout="fill"
                                        alt="" />

                                </div>
                            </Link>

                            <Link href="">
                                <div className='payment-imagis'>
                                    <Image
                                        src={Usdt}
                                        loader={imageLoader}
                                        layout="fill"
                                        alt="" />
                                </div>
                            </Link>

                            <Link href="">
                                <div className='payment-imagis'>
                                    <Image
                                        src={Usdc}
                                        loader={imageLoader}
                                        layout="fill"
                                        alt="" />
                                </div>
                            </Link>
                        </div>
                    </Col>
                    <Col className='col-12 mb-5'>
                        <Row className='d-flex justify-content-center range-slide pt-4'>
                            <Col className='col-9 col-md-7 pt-2'>
                                {/* <RangeSlider
                                    value={value}
                                    min={2.5}
                                    max={100}
                                    step={0.01}
                                    onChange={changeEvent => setValue(changeEvent.target.value)}
                                /> */}
                                <Nouislider
                                    // connect={true}
                                    step={step}
                                    start={value}
                                    // behaviour="tap-drag"
                                    // margin={300}
                                    // limit={600}
                                    snap={true}
                                    direction="ltr"
                                    tooltips={true}
                                    // tooltips={wNumb({decimals: 1})}
                                    // orientation="vertical"
                                    range={range}
                                    onChange={handleSlider}
                                // pips={{
                                //   mode: 'steps',
                                //   stepped: true,
                                //   density: 1
                                // }}
                                // onSlide={onSlide}
                                />

                                <Col className='col-12 pt-4 d-flex justify-content-around'>
                                    <Button className="m-1 bg-buy-blue" onClick={() => valueByStep("dec")}><i className="bi bi-caret-left-fill"></i></Button>
                                    <Button className="m-1 bg-buy-blue">Buy</Button>
                                    <Button className="m-1 bg-buy-blue" onClick={() => valueByStep("inc")}><i className="bi bi-caret-right-fill"></i></Button>
                                </Col>
                            </Col>
                            {/* <Col className="col-3 col-sm-2 col-md-1">
                                <Button className="bluebtn">Buy</Button>
                            </Col> */}
                        </Row>
                    </Col>
                    <Col className='col-12 col-lg-6 m-auto p-0'>
                        <div className="line-after"><h2>OR</h2></div>

                        <div className="searchbox mb-5">
                            <InputGroup className="mb-3">

                                <Form.Select aria-label="Default select example" onChange={(e) => selectChange(e)}>
                                    <option>Enter the $ amount to purchase in increments of 2.5</option>
                                    <option value={2.5}>2.5</option>
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                </Form.Select>
                                <InputGroup.Text id="basic-addon2" className="p-0 bg-remove">
                                    <Button className="bluebtn" style={{marginRight:"-1px"}}>
                                        Buy
                                    </Button>
                                </InputGroup.Text>
                            </InputGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Cryptocurrencies