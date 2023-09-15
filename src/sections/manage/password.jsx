import React from 'react'
import { Button, Form } from "react-bootstrap";


const Password = () => {
    return (
        <>
            <div className='profile-section'>
                <h4>Change Password</h4>

                <Form className="profile-form col-lg-6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Current Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder=""
                            className="form-input"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder=""
                            className="form-input"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Confirm New Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder=""
                            className="form-input"
                        />
                    </Form.Group>



                    <Form.Group className="mt-1 mb-1 justify-content-center">
                        <Button
                            variant="primary"
                            type="submit"
                            className="btn Black-btn me-3"
                        >
                            Update Password
                        </Button>
                    </Form.Group>


                </Form>
            </div>
        </>
    )
}
export default Password