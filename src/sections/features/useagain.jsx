import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import Rreuse from "../../assets/images/reuse.png";
import imageLoader from "../../utilities/imageLoader";
import { Modal, Button } from 'react-bootstrap';

const Useagain = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className='textsms-tab-sec'>
            <p>If you’ve just used a number to perform a verification, but need immediate access to the same number <b>within a minute or two,</b> you can click the “Use again” button at the bottom of the verification page.
                This feature will allow you to reuse the number you just used for another verification.</p>
            <div className='verification-request-img' onClick={handleShow}>
                <Image
                    src={Rreuse}
                    loader={imageLoader}
                    layout="fill"
                    alt=""
                />
            </div>

            <Modal show={show} onHide={handleClose} animation={false} size="xl" className='textsms-modal' centered>
                <Modal.Body>
                    <div className='verification-request-img' onClick={handleShow}>
                        <Image
                            src={Rreuse}
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

export default Useagain