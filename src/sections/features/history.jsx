import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import Vhistory from "../../assets/images/vhistory.png";
import imageLoader from "../../utilities/imageLoader";
import { Modal, Button } from 'react-bootstrap';

const History = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className='textsms-tab-sec'>
            <p>See a <Link href="">detailed history </Link>of all the verifications you’ve performed. You can see the name of the service,
                phone number used, the code you received, the cost, and whether the verification was via SMS or voice.
                This is also the place to go if you want to find out if you can <Link href="#recurrecting">resurrect</Link> one of the numbers you previously used for a verification, so you can use it again.

            </p>
            <div className='verification-request-img' onClick={handleShow}>
                <Image
                    src={Vhistory}
                    loader={imageLoader}
                    layout="fill"
                    alt=""
                />
            </div>

            <Modal show={show} onHide={handleClose} animation={false} size="xl" className='textsms-modal' centered>
                <Modal.Body>
                    <div className='verification-request-img' onClick={handleShow}>
                        <Image
                            src={Vhistory}
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

export default History