import React from 'react'
import { Button, Form } from "react-bootstrap";


const Profile = () => {
    return (
        <>
            <div className='profile-section'>
                <h4>Profile</h4>

                <Form className="profile-form col-lg-6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter First Name"
                            className="form-input"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Last Name"
                            className="form-input"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="geryu.api@gmail.com"
                            className="form-input"
                        />
                    </Form.Group>
                    <Form.Group className="mt-1 mb-1 justify-content-center">
                        <Button
                            variant="primary"
                            type="submit"
                            className="btn Black-btn me-3"
                        >
                            Login with Discord
                        </Button>
                    </Form.Group>


                </Form>
            </div>
        </>
    )
}
export default Profile