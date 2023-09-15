import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import Vhistory from "../../assets/images/vhistory.png";
import imageLoader from "../../utilities/imageLoader";
import { Modal, Button } from 'react-bootstrap';

const Bulkdiscounts = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className='textsms-tab-sec'>
            <p>Need to purchase verifications in bulk? We offer discounts for larger purchases and convenience. </p>
            <p><Link href="/login">Contact us</Link> and we’ll work with you to provide exactly what you’re looking for.</p>
        </div>

    )
}

export default Bulkdiscounts