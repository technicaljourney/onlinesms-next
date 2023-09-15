import React, { useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import {
    CloudArrowDownFill
} from 'react-bootstrap-icons';


const currentItems = [
    {
        id: 1,
        orderno: "10898326",
        timestamp: "8/18/2022 1:15:37 AM",
        cost: "50.00",
        type: "litecoin",
        status: "Expired",
        amountpaid: "0.0 LTC",
        address: "ltc.....dpg3r34f",
        icon: <CloudArrowDownFill />,
    },
    {
        id: 2,
        orderno: "10898326",
        timestamp: "8/18/2022 1:15:37 AM",
        cost: "50.00",
        type: "litecoin",
        status: "Expired",
        amountpaid: "0.0 LTC",
        address: "ltc.....dpg3r34f",
        icon: <CloudArrowDownFill />,

    },

]

const OrderTable = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div className='ordertable-section'>
                            <h4>Order History</h4>

                            <div className="tablesec">
                                <Table responsive striped className="table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Order No</th>
                                            <th>Timestamp </th>
                                            <th>Cost
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16">
                                                    <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                    <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                                                </svg>
                                            </th>
                                            <th>Type</th>
                                            <th>Status</th>
                                            <th>Amount Paid</th>
                                            <th>Address (If crypto)	</th>
                                            <th>Invoice</th>
                                        </tr>
                                    </thead>


                                    <tbody>

                                        {currentItems &&
                                            currentItems.map((item) => (
                                                <tr className="smstabledata" key={item.id}>
                                                    <td>
                                                        <div className="tabeledata">
                                                            <div className="img d-flex">

                                                                <p> {item.orderno}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="">{item.timestamp}</div>
                                                    </td>
                                                    <td>
                                                        <div className="cost">{item.cost}</div>
                                                    </td>
                                                    <td>
                                                        <div className="cost">{item.type}</div>
                                                    </td>
                                                    <td>
                                                        <div className="cost">{item.status}</div>
                                                    </td>
                                                    <td>
                                                        <div className="cost">{item.amountpaid}</div>
                                                    </td>
                                                    <td>
                                                        <div className="cost">{item.address}</div>
                                                    </td>
                                                    <td>
                                                        <div className="favorite">{item.icon}</div>
                                                    </td>

                                                </tr>
                                            ))}

                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default OrderTable