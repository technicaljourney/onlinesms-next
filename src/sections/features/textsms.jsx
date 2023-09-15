import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import TextSms from "../../assets/images/textsms.png";
import imageLoader from "../../utilities/imageLoader";
import { Modal, Button } from 'react-bootstrap';

const Textsms = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className='textsms-tab-sec'>
            <p>Choose from <Link href="/smstext">a list of provided services</Link> and immediately access a temporary phone number. Use this number to receive a verification code and initiate a new account.</p>
            <p>{`If you don't get a code, no worries—you'll only get charged if you receive a verification code.`}</p>
            <div className='verification-request-img' onClick={handleShow}>
                <Image
                    src={TextSms}
                    loader={imageLoader}
                    layout="fill"
                    alt=""
                />
            </div>
            <h4>Looking for long-term & rental number options? Check out our partner site: <Link href="#"> www.phoneblur.com.</Link></h4>

            <Modal show={show} onHide={handleClose} animation={false} size="xl" className='textsms-modal' centered>
                <Modal.Body>
                    <div className='verification-request-img' onClick={handleShow}>
                        <Image
                            src={TextSms}
                            loader={imageLoader}
                            layout="fill"
                            alt=""
                        />
                    </div>
                </Modal.Body>
            </Modal>



        </div>

    )
}

export default Textsms