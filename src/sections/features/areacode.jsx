import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import Areacodefilter from "../../assets/images/areacodefilter.png";
import imageLoader from "../../utilities/imageLoader";
import { Modal, Button } from 'react-bootstrap';

const Areacode = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className='textsms-tab-sec'>
            <p>{`Choose any area code listed in our dropdown.
                You will receive access to a phone number with that area code. This filter can be found under "Advance Options" on the verification page.`}
            </p>
            <div className='verification-request-img' onClick={handleShow}>
                <Image
                    src={Areacodefilter}
                    loader={imageLoader}
                    layout="fill"
                    alt=""
                />
            </div>

            <Modal show={show} onHide={handleClose} animation={false} size="xl" className='textsms-modal' centered>
                <Modal.Body>
                    <div className='verification-request-img' onClick={handleShow}>
                        <Image
                            src={Areacodefilter}
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

export default Areacode