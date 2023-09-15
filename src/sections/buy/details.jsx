import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row, Table } from 'react-bootstrap'
import Image from "next/image";

import imageLoader from "../../../src/utilities/imageLoader";
import charge from "../../../src/assets/images/charge.png"
import { useRouter } from 'next/router'
import Link from "next/link";


import visa from "../../assets/images/visa.png"
// import pay from "../../assets/images/pay.png"
import crypto from "../../assets/images/crypto.png"
import mastercard from "../../assets/images/mastercard.png"
import ReCAPTCHA from "react-google-recaptcha";


const buyData = [
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
];

const BuyDetail = () => {
    const router = useRouter();
    const { id } = router.query
    const [selectBuy, SetSelectedBuy] = useState();

    const [showForm, setShowForm] = useState(false)
    const toggleshowform = () => {
        setShowForm(!showForm);
    }

    useEffect(() => {
        const select = buyData.find((val) => val.id == id);
        SetSelectedBuy(select);
    }, [id])

    return (
        <>
            <Col className='col-12'>
                <h2>Select Payment Method</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Recharge</td>
                            <td><span>Recharge - {selectBuy?.count}
                                <Image
                                    src={charge}
                                    loader={imageLoader}
                                    layout="fill"
                                    alt=""
                                    className='ms-2'
                                /></span>
                            </td>
                            <td> {selectBuy?.count}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr><td colSpan="3"></td></tr>
                        <tr>
                            <td colSpan="2"><b>Subtotal</b></td>
                            <td colSpan="1"><b> {selectBuy?.count}</b></td>
                        </tr>
                    </tfoot>
                </Table>
                <div className='warning-mess p-4'>
                    <p className='p-0 mb-1'>Any usage or attempted usage of the following may lead to account suspension:</p>
                    <ul>
                        <li>card(s) where you are not the primary cardholder</li>
                        <li>stolen card(s)</li>
                        <li>shared card(s)</li>
                        <li>fraudulent virtual card(s)</li>
                        <li>third-party card(s)</li>
                    </ul>
                </div>
            </Col>
            <Col className='col-md-4 my-3'>
                <Form.Select aria-label="Default select example">
                    <option value="N/A">Choose a payment method</option>
                    <option selected value="STRIPE">Credit Card (USD)</option>
                </Form.Select>
            </Col>
            <Col className='col-12'>
                <div className={showForm ? 'paymentbtn' : null}>
                    <Button className='btnContinue'>Go Back</Button>
                    <Button className='btnContinue ms-2' onClick={toggleshowform}>Continue</Button>
                </div>

            </Col>

            {/* form */}
            <div className={showForm ? 'show' : null}>
                <div className='hideform'>

                    <Row>
                        <Col className='col-lg-6 my-5'>
                            <div className='payment-form'>
                                <h4>New Card</h4>

                                <Form className="mt-5">
                                    <Form.Group className="row">
                                        <Form.Group
                                            className="col-md-6 mb-3"
                                            controlId="formBasicEmail"
                                        >
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Firstname"
                                                className="form-input"
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className="col-md-6 mb-3"
                                            controlId="formBasicEmail"
                                        >
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Last Name"
                                                className="form-input"
                                            />
                                        </Form.Group>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="1234 Main St"
                                            className="form-input"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Address2</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Aepartment, Studio, or floor"
                                            className="form-input"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Card Information</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="1234 1234 1234 1234"
                                            className="form-input"
                                        />
                                        <Form.Control
                                            type="text"
                                            placeholder="MM / YY"
                                            className="form-input"
                                        />
                                        <Form.Control
                                            type="text"
                                            placeholder="CSV"
                                            className="form-input"
                                        />
                                        <Form.Control
                                            type="text"
                                            placeholder="90210"
                                            className="form-input"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mt-4 mb-4">
                                        <ReCAPTCHA className="g-recaptcha" sitekey={process.env.NEXT_PUBLIC_SITE_KEY} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check
                                            type="checkbox"
                                            label="Save card for future payments"
                                        />
                                    </Form.Group>
                                    <Form.Group className="">
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            className="btn Black-btn"
                                        >
                                            Alipay
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </div>
                        </Col>

                        <Col className='col-lg-6 my-5'>
                            <div className='savedcard-form'>
                                <h4>Saved Card(s)</h4>
                            </div>
                        </Col>
                    </Row>
                </div>

            </div>
        </>
    )
}

export default BuyDetail