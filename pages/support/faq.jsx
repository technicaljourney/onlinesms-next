import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import parse from 'html-react-parser';
import Layout from '../../src/layout/layout';


const generalData = [
    {
        eKey: 0,
        que: "Where are your numbers from?",
        ans: "Our numbers are from major US phone companies. We guarantee you can verify any service, even those that don't accept virtual numbers such as Google."
    },
    {
        eKey: 1,
        que: "When do you get new numbers?",
        ans: "We're always trying to get as many numbers as possible for the best possible experience, but due to high demand, it's not always possible. We'll keep expanding our capabilities to provide you the best service we can."
    },
    {
        eKey: 2,
        que: "How long do your short-term/temporary numbers last?",
        ans: "All of our numbers are ephemeral—once a number has been cycled, we no longer have access to that number."
    },
    {
        eKey: 3,
        que: "Do you provide an API?",
        ans: "The API feature is now live! Please click <a href='/'>here</a> for more information."
    },
    {
        eKey: 4,
        que: "How do I change my password?",
        ans: "You can click <a href='/'>here</a> to change your password."
    }
]

const verifyData = [
    {
        eKey: 0,
        que: "How much time do I have to verify a service?",
        ans: "You will have <b>5</b> minutes after you've requested a number to verify your selected service. If you don't receive a code in that amount of time, the verification will timeout, but your credits <b>will not</b> be deducted. Credits are only deducted for successful verifications where you receive a code."
    },
    {
        eKey: 1,
        que: "Where can I see my verification history?",
        ans: "You can click <a href='/'>here</a> to view your verification history."
    },
    {
        eKey: 2,
        que: "What do the different statuses mean?",
        ans: "Per the tooltip, the <span className='badge-success'>New</span> status means there is a number available for the service that you have not <span className='badge-orange'>used</span>. The Used status means the numbers currently available have already been used by you for the service to complete a verification. The <span>N/A</span> status means there are currently no available numbers for the service to complete a verification."
    },
    {
        eKey: 3,
        que: "When will service <i> X </i> have numbers again? Why does the service I am trying to verify seem to always have a <span >N/A </span> status?",
        ans: "We’re always trying to get more numbers to satisfy our customers, but due to high demand, it is not always possible. We are actively working on expanding our capabilities to provide you the best service we can, and in the meantime, we ask you to please be patient."
    },
    {
        eKey: 4,
        que: "What is the “Favorite” star toggle?",
        ans: "Per the tooltip, services that you mark as a favorite (indicated by a <img className='favIcon' src='http://simpleicon.com/wp-content/uploads/star.png' alt='fav' />) will show up on the top of the services list to make it easier for you to find those services. You can remove a service from your favorites by toggling the star again (indicated by a <img className='favIcon' src='https://www.kindpng.com/picc/m/299-2995487_favourite-star-icon-hd-png-download.png' alt='fav' />)."
    },
    {
        eKey: 5,
        que: "What is the 'Service not listed' option?",
        ans: "The 'Service not listed' option is a feature you can use to request a verification for a service that we do not currently have on our services list. We monitor all verifications done via this feature and periodically update our services list with new requests, so please make sure the service you are requesting is not already part of our offerings—verifications for services that <b>are</b> part of our current offerings <b>will not</b> work with this 'Service not listed' option."
    },
    {
        eKey: 6,
        que: "How can I do verifications in bulk or automate the verification process?",
        ans: "Please refer to the <a href='/'>API feature</a>."
    },
    {
        eKey: 7,
        que: "Can I use the same number again?",
        ans: "After successfully completing a verification, you will have a limited amount of time to click on the 'Use again' button to complete another verification for the same service with the same number. You will be charged again for each subsequent verification you do. Refer to the example below:<div className='mt-3'><img className='w-100' src='https://www.textverified.com/images/reuse.png' alt='verify' /></div>"
    },
    {
        eKey: 8,
        que: "The service I'm trying to verify won't send a SMS to the number I got assigned. What do I do?",
        ans: "If a number is not working for you, you can click on the 'Report Number' button to indicate the problem. You can then start a new verification and we will try to give you a different number. Refer to the example below:<div className='mt-3'><img className='w-100' src='https://www.textverified.com/images/report.png' alt='verify' /></div>"
    },
    {
        eKey: 9,
        que: "I've tried multiple times but still am unable to receive a code. What do I do?",
        ans: "Usually in these situations, the service provider has started tracking you and seeing that you may be making multiple accounts or are violating their terms of use. Below is a non-exhaustive list of things that can trigger this:<div className='mt-3'><ul><li>Low quality proxies</li><li>Geographic mismatch</li><li>Repeated use of an IP address</li><li>Non-standard browsers and emulators</li><li>Not sanitizing your browser after each session</li><li>Repetitive behaviors</li><li>Velocity of actions</li><li>Multiple failed attempts/failures</li><li>Bots/scripts/any automation</li></ul></div><p>This tracking is can be quite sophisticated so we recommend you check the following to make sure your identity is protected:</p><div><ul><li>IP address</li><li>IP address rotations</li><li>IP/DNS leaks</li><li>Cookies, cache, and local storage</li><li>Proxy/VPN provider quality</li><li>Geolocation</li><li>Fingerprints (TCP/Browser)</li><li>Browser extensions</li><li>Third-party applications</li><li>Action throttling</li></ul></div><p>These tracking techniques can also change regularly so what may have worked for you last week could no longer be working now if you haven't adapted.</p>"
    },
    {
        eKey: 10,
        que: "Why do I keep seeing the same number when I request for verifications?",
        ans: "Our numbers cycle based on an algorithm—we are always working on ways to expand our capacity . In the meantime, we ask you to be patient while we work on improving our service."
    },
    {
        eKey: 11,
        que: "The service I requested didn't accept the number! What do I do?",
        ans: "Often these issues are caused by checks done by the services involved. They can detect if you are using a proxy, attempting to create multiple accounts or other similar activity. Unfortunately, there isn’t anything we can do on our end to address this. Our advice would be to wait for a new number, indicated by the <span className='badge-success'>New</span> status, and trying again later."
    },
    {
        eKey: 12,
        que: "I got a code, but it didn't work! What do I do?",
        ans: "Please <a href='/'>contact support</a> with your <b>account email</b> and <b>all information relating to your verification request (i.e. service requested, number used, time of verification, code provided, screenshots of error messages, etc.)</b>. You may have used the 'resend code' option from the service provider or you might have clicked on the 'send code' option multiple times - we will only provide the first code that we get."
    },
    {
        eKey: 13,
        que: "I used one of your numbers to verify a service in the past and now I need that number again to access my service account! What do I do?",
        ans: "Unfortunately, all of our numbers are ephemeral—once a number has been cycled, we do not have access to that number anymore and are unable to provide verifications for a past number. If you are planning on long term usage of a service account verified through our service, we <b>strongly</b> recommend removing the number from your service account, if possible. This will help prevent re-verification issues arising from the use of a temporary number—<b>we are unable to recover past numbers</b>."
    },
    {
        eKey: 14,
        que: "Do you resell verifications? Are you a reseller?",
        ans: "No. We are not a reseller. There is no middleman — we work directly with telecommunication companies and your verification is yours alone."
    },
]

const creditsData = [
    {
        eKey: 0,
        que: 'What forms of payment do you accept?',
        ans: '<p>We currently accept Bitcoin, and other Cryptocurrencies in exchange for credits.</p><p>Due to service provider issues, we have had to disable PayPal as a payment option.</p><p>We are working on restoring PayPal as a payment option, but it is unlikely to return any time soon.We strongly recommend purchasing via crypto currency.</p>'
    },
    {
        eKey: 1,
        que: 'Where can I see my credit purchase transactions?',
        ans: "You can click <a href='/'>here</a> to view your past credit purchases."
    },
    {
        eKey: 2,
        que: 'My payment went through, but I didn’t get my credits! What do I do?',
        ans: "Please <a href='/'>contact support</a> with your <b>account email</b> and <b>order number</b>. For Bitcoin payments, <b>we require sufficient network confirmations</b> before automatically crediting your account. Other cryptocurrencies will be processed whenever we are notified by our payment processor. This will vary based on the required number of confirmations and the network confirmation speed.If you are paying with a cryptocurrency, please make sure you are including any transaction fees your wallet deducts in your total payment amount and make sure you send exact amounts.We do not adjust for nominal differences and sending the incorrect amount can result in delays in processing your order.<b>We are not liable for any payments sent to the wrong party or wrong wallet</b>."
    },
    {
        eKey: 3,
        que: 'Credits were deducted from my account, but my verification wasn’t successful! What do I do?',
        ans: "Please <a href='/'>contact support</a> with your <b>account email</b> and <b>any information relating to your verification request (i.e. service requested, number used, time of verification, code provided, screenshots of error messages, etc)</b>. We will work with you to try to resolve any issues."
    },
    {
        eKey: 4,
        que: 'I want a credit/monetary refund. What do I do?',
        ans: 'Please contact support with your <b>account email</b> and <b>reason for refund</b>. We assess credit/monetary refunds on a case by case basis and will work with you to make it right. Please note that we are unable to process cryptocurrency refunds.'
    }
]

const FAQ = () => {
    return (
        <Layout>
            <Container className='faq-main'>
                <Row>
                    <Col className='col-xl-9'>
                        <h2 className='mb-3'>FAQ</h2>
                        <h3 className='mb-2'>General <span>[+]</span><span className='ms-2'>[-]</span></h3>
                        <Accordion>
                            {generalData.map((data, key) => {
                                return (
                                    <Accordion.Item eventKey={data.eKey} key={key}>
                                        <Accordion.Header>{data.que}</Accordion.Header>
                                        <Accordion.Body>{parse(data.ans)}</Accordion.Body>
                                    </Accordion.Item>
                                )
                            })}
                        </Accordion>
                        <h3 className='mb-2 mt-2'>Verifications <span>[+]</span><span className='ms-2'>[-]</span></h3>
                        <Accordion>
                            {verifyData.map((data, key) => {
                                return (
                                    <Accordion.Item eventKey={data.eKey} key={key}>
                                        <Accordion.Header>{parse(data.que)}</Accordion.Header>
                                        <Accordion.Body>{parse(data.ans)}</Accordion.Body>
                                    </Accordion.Item>
                                )
                            })}
                        </Accordion>
                        <h3 className='mb-2 mt-2'>Credits <span>[+]</span><span className='ms-2'>[-]</span></h3>
                        <Accordion>
                            {creditsData.map((data, key) => {
                                return (
                                    <Accordion.Item eventKey={data.eKey} key={key}>
                                        <Accordion.Header>{data.que}</Accordion.Header>
                                        <Accordion.Body>{parse(data.ans)}</Accordion.Body>
                                    </Accordion.Item>
                                )
                            })}
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default FAQ