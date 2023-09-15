import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import Largervolumeimg from "../../assets/images/largervolume.png";
import imageLoader from "../../utilities/imageLoader";
import { Modal, Button } from 'react-bootstrap';

const Largervolume = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className='textsms-tab-sec'>
            <p>Need to purchase verifications in bulk? We offer discounts for larger purchases and convenience. </p>
            <p><Link href="/login">Contact us</Link> and we’ll work with you to provide exactly what you’re looking for.</p>
            <div className='verification-request-img' onClick={handleShow}>
                <Image
                    src={Largervolumeimg}
                    loader={imageLoader}
                    layout="fill"
                    alt=""
                />
            </div>

            <Modal show={show} onHide={handleClose} animation={false} size="xl" className='textsms-modal' centered>
                <Modal.Body>
                    <div className='verification-request-img' onClick={handleShow}>
                        <Image
                            src={Largervolumeimg}
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

export default Largervolume