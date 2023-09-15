import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import Resurrectimg from "../../assets/images/resurrect.png";
import imageLoader from "../../utilities/imageLoader";
import { Modal, Button } from 'react-bootstrap';

const Resurrect = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className='textsms-tab-sec'>
            <p>Sometimes you’ve used a number and unexpectedly need access <b>a few hours later.</b> If we still have access to that number,
                then you will be able to select the “Resurrect” option from your <Link href="#">Verification History page.</Link></p>
            <p>Once a number leaves the textverified.com platform, it cannot be accessed again. If you need guaranteed access to a number for an longer period of time, please use
                <Link href="https://www.phoneblur.com/app/"> www.phoneblur.com </Link>for your verifications.</p>
            <div className='verification-request-img' onClick={handleShow}>
                <Image
                    src={Resurrectimg}
                    loader={imageLoader}
                    layout="fill"
                    alt=""
                />
            </div>
            <h4>Looking for long-term & rental number options?Check out our partner site, <Link href="#"> www.phoneblur.com.</Link></h4>

            <Modal show={show} onHide={handleClose} animation={false} size="xl" className='textsms-modal' centered>
                <Modal.Body>
                    <div className='verification-request-img' onClick={handleShow}>
                        <Image
                            src={Resurrectimg}
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

export default Resurrect