import React from "react";
import Link from "next/link"

import {
  Facebook, Instagram, Linkedin, Youtube
} from 'react-bootstrap-icons';
import Image from "next/image";
import { Container, Row } from 'react-bootstrap'

// imageloader
import imageLoader from "../utilities/imageLoader";

// images
import BrandLogo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <>

      <div className="main-footer mt-auto">
        <div className="top-footer">
          <Container>
            <Row className="mx-4">
              <span className="texth6">All of our numbers are U.S. based and will work with any service.</span>
            </Row>
          </Container>
        </div>
        <div className="onlineSmsFooter">
          <div className="footerContetntArea">
            <div className="aboutText">
              <div className="fotlogo mb-3">
                <Image
                  src={BrandLogo}
                  loader={imageLoader}
                  layout="fill"
                  style={{ width: "190px" }}
                  alt=""
                />
              </div>
              <p>
                We are the premier one stop shop for all your sms and text
                verification needs. Exceptional service and competitive pricing
                sets us apart from the rest.
              </p>
            </div>
            <div className="servicesText">
              <h4>SERVICES</h4>
              <ul>
                <li><Link href="/ondemand"><a>On Demand</a></Link></li>
                <li><Link href="/apis"><a>API</a></Link></li>
              </ul>
            </div>
            <div className="servicesText">
              <h4>USEFUL LINKS</h4>
              <ul>
                <li><Link href="/login"><a>Log In</a></Link></li>
                <li><Link href="/signup"><a>Sign Up</a></Link></li>
                <li><Link href="/support/faq"><a>FAQ</a></Link></li>
                <li><Link href="/support/terms"><a>Terms</a></Link></li>
                <li><a href="#">Policy</a></li>
                <li><a href="#">Help</a></li>
              </ul>
            </div>
            <div className="servicesText">
              <h4>CONTACT</h4>
              <ul>
                <li><a href="#">Contact Us</a></li>
              </ul>
              <ul className="social-media">
                <li><a href="#"><Facebook /></a></li>
                <li><a href="#"><Instagram /></a></li>
                <li><a href="#"><Linkedin /></a></li>
                <li><a href="#"><Youtube /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
