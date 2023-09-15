import React from 'react'
import Image from "next/image";

import { Tab, Tabs, Card, Button } from 'react-bootstrap'
import Areacode from './areacode'
import Resurrect from './resurrect'
import Subaccount from './subaccount'
import Textsms from './textsms'
import Useagain from './useagain'
import History from './history'
import Bulkdiscounts from './bulkdiscounts'
import Largervolume from './largervolume'
import Link from 'next/link'

import Btcimg from "../../assets/images/btc.svg"
import Ltcimg from "../../assets/images/ltc.png"
import Ethimg from "../../assets/images/eth.png"
import Usdt from "../../assets/images/usdt.png"
import CreditCard from "../../assets/images/credit-card.png"
import imageLoader from "../../utilities/imageLoader";



const SidebarTabs = () => {
    return (
        <div className='sidebar-tabs'>
            <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Temporary Numbers" className='verticle-tabs'>
                    <Tabs
                        defaultActiveKey="home"
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="Text/SMS">
                            <Textsms />
                        </Tab>
                    </Tabs>
                </Tab>
                <Tab eventKey="profile" title="Additional Features" className='verticle-tabs'>
                    <Tabs
                        defaultActiveKey="home"
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="Sub Accounts">
                            <Subaccount />
                        </Tab>
                        <Tab eventKey="useagain" title="Use Again">
                            <Useagain />
                        </Tab>
                        <Tab eventKey="resurrect" title="Resurrect">
                            <Resurrect />
                        </Tab>
                        <Tab eventKey="areacode" title="Area Code">
                            <Areacode />
                        </Tab>
                        <Tab eventKey="history" title="History">
                            <History />
                        </Tab>
                    </Tabs>
                </Tab>
                <Tab eventKey="androidapp" title="Android App" className='verticle-tabs'>
                    <Card>
                        <Card.Header>Android App</Card.Header>
                        <Card.Body className=''>
                            <div className='comming-soon'>
                                <Card.Text>
                                    Cooming Soon....
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>
                <Tab eventKey="easypayments" title="Easy Payments" className='verticle-tabs'>
                    <Card>
                        <Card.Header>Easy Payments</Card.Header>
                        <Card.Body>
                            <div>
                                <Card.Text>
                                    We accept all major credit/debit cards and three major cryptocurrencies (Bitcoin, Litecoin, and Ethereum).
                                </Card.Text>
                                <div className='d-flex justify-content-center align-items-center my-4 d-mobile-block'>
                                    <Link href="#">
                                        <div className='creditcard-payment-imagis'>
                                            <Image
                                                src={CreditCard}
                                                loader={imageLoader}
                                                layout="fill"
                                                alt=""
                                            />
                                        </div>
                                    </Link>
                                    <Link href="#">
                                        <div className='creditcard-payment-imagis'>
                                            <Image
                                                src={Btcimg}
                                                loader={imageLoader}
                                                layout="fill"
                                                alt=""
                                            />

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
                                                alt=""
                                            />

                                        </div>
                                    </Link>
                                    <Link href="">
                                        <div className='payment-imagis'>
                                            <Image
                                                src={Usdt}
                                                loader={imageLoader}
                                                layout="fill"
                                                alt=""
                                            />

                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>
                <Tab eventKey="poweruser" title="Power User" className='verticle-tabs'>
                    <Tabs
                        defaultActiveKey="home"
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="Bulk Discounts">
                            <Bulkdiscounts />
                        </Tab>
                        <Tab eventKey="largervolume" title="Larger Volume">
                            <Largervolume />
                        </Tab>
                    </Tabs>
                </Tab>
                <Tab eventKey="largervolume" title="Larger Volume" className='verticle-tabs'>
                    <Card>
                        <Card.Header>Tech Support</Card.Header>
                        <Card.Body className='card-content'>
                            <Card.Text>
                                Around the clock tech support—we&apos; ll answer your questions or assist with any issues that may arise within 24 hours.
                                If you need a service that&apos;s not listed in our database, <Link href="/login"> contact us </Link> and we&apos; ll try to add it.

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Tab>
                <Tab eventKey="api" title="API" className='verticle-tabs'>
                    <Card>
                        <Card.Header>API</Card.Header>
                        <Card.Body className='card-content'>
                            <Card.Text>
                                Looking to automate your verification workflow? Whether you need one verification or thousands,
                                the <Link href=""> Textverified API </Link> will solve your verification problems. Our API follows the standard HTTP REST conventions so integration is intuitive and simple.
                            </Card.Text>
                            <Card.Text>
                                If you have any questions or issues with our API, just <Link href="#"> drop us a line </Link> and we&apos; ll be happy to help.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>
        </div >
    )
}

export default SidebarTabs