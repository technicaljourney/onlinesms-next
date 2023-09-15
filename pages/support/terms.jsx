import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Link from "next/link";

// layout
import Layout from "../../src/layout/layout";

const Terms = () => {
    return (
        <>
            <Layout>
                <Container className='terms-main'>
                    <Row>
                        <Col className='col-xl-9'>
                            <h2 className='mb-3'>Terms and Conditions</h2>
                            <div className='mb-2'><i>Last Updated: 01/18/2022</i></div>
                            <h3>Introduction</h3>
                            <p className='ps-4'>Please read these Terms and Conditions (Terms, Terms and Conditions) carefully before using the https://www.textverified.com website (the Service) operated by textverified.com (us, we, or our).</p>
                            <p className='ps-4'>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
                            <p className='ps-4'><b>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</b></p>
                            <h3>Prohibited Activities</h3>
                            <p className='ps-4'>Use of the Service to engage in illegal activities is <b>prohibited</b>.</p>
                            <h3>Accounts</h3>
                            <p className='ps-4'>You are responsible for <b>(1)</b> providing accurate and complete information when creating an account with us, <b>(2)</b> maintaining adequate security and control of any and all usernames, passwords, or any other information that you use to access your Service account and the related services, and <b>(3)</b> keeping your profile information up-to-date in your Service account profile.</p>
                            <h3>Numbers</h3>
                            <p className='ps-4'>Any numbers provided to you via the Service do <b>not</b> belong to you. Sharing of these numbers to third parties is prohibited and considered a breach of the Terms, which may lead to immediate termination of your account on our Service.</p>
                            <p className='ps-4'>You accept that the availability of numbers changes at our discretion and numbers may not be available at all times.</p>
                            <p className='ps-4'>By using the Service, you accept that the numbers we provide are temporary and subject to change at our discretion. We are not responsible for any incident(s) arising from your use of a number.</p>
                            <p className='ps-4'>In addition, the service we provide covers verifications only. We are not responsible for any incident(s) that occur outside of the verification process, which starts when you request a number for verification and ends when you receive a code. By using the Service, you indemnify, defend and hold harmless us for, from and against any liability.</p>
                            <h3>Rentals</h3>
                            <p className='ps-4'>Numbers we provide as part of the rentals feature of the Service do <b>not</b> belong to you. They are considered numbers that are on loan for the period of time that has been purchased by you.</p>
                            <p className='ps-4'>We will do our utmost to provide you with the number(s) you have rented for the period of time you purchase. However, we reserve the right to change your rented number(s) or end your rental(s) prematurely as needed.</p>
                            <p className='ps-4'>Rentals are subject to the stipulations (including, but not limited to, what a rental entails, rental length, pricing etc.) laid out on the <Link href="/support/faq">FAQ</Link> page, the purchase rental page, and the renew rental page. We reserve the right to change said stipulations at our discretion.</p>
                            <p className='ps-4'>The rentals service we provide covers verifications only. We are not responsible for any incident(s) that occur outside of the verification process, which starts when you purchase a rental and use the number(s) assigned to you for a verification and ends when you receive a code. By using the Service, you indemnify, defend and hold harmless us for, from and against any liability.</p>
                            <h3>Purchases</h3>
                            <p className='ps-4'>We accept the following forms of payment:</p>
                            <ul className='ps-5'>
                                <li>Card</li>
                                <li>Cryptocurrencies</li>
                            </ul>
                            <p className='ps-4'>You accept the purchasing of our Credits currency with the above listed payment methods in order to use the Service. We are not responsible for any payments sent to the wrong party or incorrect payment amounts. We reserve the right to discontinue or modify the payment methods or prices of our credits at any time for any reason.</p>
                            <p className='ps-4'>Prices of all services purchased with our credits are subject to change at our discretion.</p>
                            <h3>Refunds</h3>
                            <p className='ps-4'>We assess Credit or monetary refunds on a case by case basis. We reserve the right to deny a refund for any reason, including but not limited to, abuse of our service, payments sent to wrong party, violation of our Terms, etc.</p>
                            <h3>Termination</h3>
                            <p className='ps-4'>We reserve our right to terminate your access to any or all parts of the Service at our discretion. If you wish to terminate your agreement of the Terms or your Service account, simply discontinue using the Service.</p>
                            <h3>Warranties Disclaimer</h3>
                            <p className='ps-4'>We make no warranties that the Service <b>(1)</b> availability will be continuous or uninterrupted <b>(2)</b> will be error free. We reserve the right to discontinue or modify any part of the Service at any time for any reason.</p>
                            <h3>Severability Clause</h3>
                            <p className='ps-4'>If any provision of these Terms is determined to be invalid, illegal, or unenforceable, it shall not affect the enforceability of any other provision of these Terms.Rather, the invalid, illegal, or unenforceable provision shall be modified so that it is valid, legal, and enforceable and to the fullest extent possible, reflects the intention of onlinesms-us.com.</p>
                            <h3>Changes</h3>
                            <p className='ps-4'>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least <b>15</b> days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                            <h3>Contact Us</h3>
                            <p className='ps-4'>If you have any questions about these Terms, please <Link href="/support/contact">contact us</Link> .</p>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </>
    )
}

export default Terms