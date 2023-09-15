import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Image from "next/image";
// import LoginImg from "../src/assets/images/chat.png";
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
// import { Google, Facebook, Twitter } from "react-bootstrap-icons";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import ReCAPTCHA from "react-google-recaptcha";
import Layout from "../src/layout/layout";

const Login = () => {
  const [typepassword, setTypePassword] = useState("password");
  const [iconPassword, setIconPassword] = useState(EyeFill);
  const handletogglepassword = () => {
    if (typepassword === "password") {
      setIconPassword(EyeSlashFill);
      setTypePassword("text");
    } else {
      setIconPassword(EyeFill);
      setTypePassword("password");
    }
  };

  return (
    <>
      <Layout>
        <div className="box-shadow">
          <Container fluid>
            <Row>
              <Col lg={5} xl={6} className="m-auto">
                <div className="login-page">
                  <div>
                    <h4>Please login to continue</h4>
                  </div>
                  <Form className="login-form">
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
                    <Form.Group className="mb-4 mt-4">
                      <ReCAPTCHA className="g-recaptcha" sitekey={process.env.NEXT_PUBLIC_SITE_KEY} />
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-between">
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="Remember me?" />
                      </Form.Group>
                      <Form.Group className="links">
                        <Link href="/forgotpassword">Forgot Password?</Link>
                      </Form.Group>
                    </Form.Group>
                    <Form.Group className="mt-1 mb-1 justify-content-center text-center">
                      <Button
                        variant="primary"
                        type="submit"
                        className="btn Black-btn me-3"
                      >
                        Login
                      </Button>
                    </Form.Group>
                    <Form.Group className="line-after">
                      <h2>
                        <span>Or continue with</span>
                      </h2>
                    </Form.Group>
                    <Form.Group className="links text-center">
                      <span>
                        {"Don't have an account yet? "}
                        <Link href="/signup" className="d-inline-block">
                          {" Sign Up"}
                        </Link>
                      </span>
                    </Form.Group>
                    {/* <Form.Group className="d-flex justify-content-center">
                      <Link href="#">
                        <Button
                          variant="primary"
                          className="btn white-btn google"
                        >
                          <Google />
                        </Button>
                      </Link>
                      <Link href="#">
                        <Button
                          variant="primary"
                          className="btn white-btn facebook"
                        >
                          <Facebook />
                        </Button>
                      </Link>
                      <Link href="#">
                        <Button
                          variant="primary"
                          className="btn white-btn twitter"
                        >
                          <Twitter />
                        </Button>
                      </Link>
                    </Form.Group> */}
                  </Form>
                </div>
              </Col>

              <Col lg={7} xl={6} className="p-0">
                <div className="background-color-signup mx-auto">
                  <div className="login-content">
                    <h4>Use another service to Login.</h4>

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

export default Login;
