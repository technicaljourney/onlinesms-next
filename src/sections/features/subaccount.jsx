import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import Subaccounts from "../../assets/images/subaccounts.png";
import imageLoader from "../../utilities/imageLoader";
import { Modal, Button } from 'react-bootstrap';

const Subaccount = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className='textsms-tab-sec'>
            <p>Designate one account as a “Parent” account and distribute credits to multiple “Child” accounts.
                This is a great option if you are an employer with multiple employees. You can also keep track of each account’s verification history.</p>
            <p>You can have up to 5 sub accounts — <Link href="/login">contact us </Link> if you need more. <Link href="#">Click here </Link>
                to view a detailed guide on how sub accounts work.
            </p>
            <div className='verification-request-img' onClick={handleShow}>
                <Image
                    src={Subaccounts}
                    loader={imageLoader}
                    layout="fill"
                    alt=""
                />
            </div>

            <Modal show={show} onHide={handleClose} animation={false} size="xl" className='textsms-modal' centered>
                <Modal.Body>
                    <div className='verification-request-img' onClick={handleShow}>
                        <Image
                            src={Subaccounts}
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

export default Subaccount