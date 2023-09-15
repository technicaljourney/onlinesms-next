import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Image from "next/image";
// import SignupImg from "../src/assets/images/signup.png";
import Layout from "../src/layout/layout";
// import Logo from "../src/assets/images/logoblue.png";
// import User1 from "../src/assets/images/user1.jpg";
// import User2 from "../src/assets/images/user2.jpg";
// import User3 from "../src/assets/images/user3.jpg";
// import User4 from "../src/assets/images/user4.jpg";
import imageLoader from "../src/utilities/imageLoader";
import Google from "../src/assets/social/google.png";
import Facebook from "../src/assets/social/facebook.png";
import Twitter from "../src/assets/social/twitter.png";
import Apple from "../src/assets/social/apple.png";
import Instagram from "../src/assets/social/instagram.png";
import Link from "next/link";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import ReCAPTCHA from "react-google-recaptcha";

const SignUp = () => {
  const [typepassword, setTypePassword] = useState("password");
  const [iconPassword, setIconPassword] = useState(EyeFill);
  const [typeConfirmpassword, setTypeConfirmPassword] = useState("password");
  const [iconConfirmPassword, setIconConfirmPassword] = useState(EyeFill);

  const handletogglepassword = () => {
    if (typepassword === "password") {
      setIconPassword(EyeSlashFill);
      setTypePassword("text");
    } else {
      setIconPassword(EyeFill);
      setTypePassword("password");
    }
  };

  const handletoggle = () => {
    if (typeConfirmpassword === "password") {
      setIconConfirmPassword(EyeSlashFill);
      setTypeConfirmPassword("text");
    } else {
      setIconConfirmPassword(EyeFill);
      setTypeConfirmPassword("password");
    }
  };

  return (
    <>
      <Layout>
        <div className="box-shadow ">
          <Container fluid>
            <Row>
              <Col lg={5} xl={6}>
                <div className="signup-page">
                  <div>
                    <h4>Register</h4>
                    <h5>Create a new account.</h5>
                  </div>
                  <Form className="signup-form">
                    <Form.Group className="row">
                      <Form.Group
                        className="col-md-6 mb-3"
                        controlId="formBasicEmail"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Firstname"
                          className="form-input"
                        />
                      </Form.Group>
                      <Form.Group
                        className="col-md-6 mb-3"
                        controlId="formBasicEmail"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Last Name"
                          className="form-input"
                        />
                      </Form.Group>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        className="form-input"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 position-relative"
                      controlId="formBasicPassword"
                    >
                      <Form.Control
                        type={typepassword}
                        placeholder="Password"
                        className="form-input"
                      />
                      <div className="eysicon">
                        <span onClick={handletogglepassword}>
                          <EyeFill icon={iconPassword} />
                        </span>
                      </div>
                    </Form.Group>
                    <Form.Group
                      className="mb-3 position-relative"
                      controlId="formBasicPassword"
                    >
                      <Form.Control
                        type={typeConfirmpassword}
                        placeholder="Confirm Password"
                        className="form-input"
                      />
                      <div className="eysicon">
                        <span onClick={handletoggle}>
                          <EyeFill icon={iconConfirmPassword} />
                        </span>
                      </div>
                    </Form.Group>

                    <Form.Group className="mt-4 mb-4">
                      <ReCAPTCHA className="g-recaptcha" sitekey={process.env.NEXT_PUBLIC_SITE_KEY} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="I accept the terms and conditions."
                      />
                    </Form.Group>
                    <Form.Group className="text-center">
                      <Button
                        variant="primary"
                        type="submit"
                        className="btn Black-btn"
                      >
                        Sign Up
                      </Button>
                    </Form.Group>
                    <Form.Group className="line-after">
                      <h2>
                        <span>Or continue with</span>
                      </h2>
                    </Form.Group>
                    <Form.Group className="links text-center">
                      <span>
                        Already have an account?
                        <Link href="/login" className="d-inline-block">
                          Sign In
                        </Link>
                      </span>
                    </Form.Group>

                  </Form>
                </div>
              </Col>
              <Col lg={7} xl={6} className="p-0">
                <div className="background-color-signup mx-auto">
                  <div className="login-content">
                    <h4>Use another service to Sign up.</h4>

                    <Row>
                      <Col className="col-12 mb-4">
                        <Button className="btn social-btn btn-primary">
                          <div className="svg-icon">
                            <Image
                              src={Google}
                              loader={imageLoader}
                              layout="fill"
                              className="img-fluid mosaic-1"
                              alt=""
                            />
                          </div>
                          <span>Continue with Google</span>
                        </Button>
                      </Col>
                      <Col className="col-12 mb-4">
                        <Button className="btn social-btn btn-primary">
                          <div className="svg-icon">
                            <Image
                              src={Facebook}
                              loader={imageLoader}
                              layout="fill"
                              className="img-fluid mosaic-1"
                              alt=""
                            />
                          </div>
                          <span>Continue with Facebook</span>
                        </Button>
                      </Col>
                      <Col className="col-12 mb-4">
                        <Button className="btn social-btn btn-primary">
                          <div className="svg-icon">
                            <Image
                              src={Apple}
                              loader={imageLoader}
                              layout="fill"
                              className="img-fluid mosaic-1"
                              alt=""
                            />
                          </div>
                          <span>Continue with Apple</span>
                        </Button>
                      </Col>
                    </Row>
                    {/* <p>
                      Just as it takes a company to sustain a product, it takes
                      a community to sustain a protocol.
                    </p> */}
                    {/* <div className="userimg-sec d-flex align-items-center mt-4">
                      <div className="usericon">
                        <div className="userimg">
                          <Image
                            src={User1}
                            loader={imageLoader}
                            layout="fill"
                            className="img-fluid mosaic-1"
                            alt=""
                          />
                        </div>
                        <div className="userimg">
                          <Image
                            src={User2}
                            loader={imageLoader}
                            layout="fill"
                            className="img-fluid mosaic-1"
                            alt=""
                          />
                        </div>
                        <div className="userimg">
                          <Image
                            src={User3}
                            loader={imageLoader}
                            layout="fill"
                            className="img-fluid mosaic-1"
                            alt=""
                          />
                        </div>
                        <div className="userimg">
                          <Image
                            src={User4}
                            loader={imageLoader}
                            layout="fill"
                            className="img-fluid mosaic-1"
                            alt=""
                          />
                        </div>
                      </div>
                      <h5 className="d-flex">
                        More than 17k people joined us, it is your turn{" "}
                      </h5>
                    </div> */}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default SignUp;
