import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Container, Row, Col, Table, Pagination } from 'react-bootstrap'
import { Star } from 'react-bootstrap-icons';
import tabledataicon1 from '../../assets/images/tabledataicon1.png'
import tabledataicon2 from '../../assets/images/tabledataicon2.png'
import tabledataicon3 from '../../assets/images/tabledataicon3.png'
import imageLoader from "../../utilities/imageLoader";

import ReactPaginate from 'react-paginate';

const items = [
    {
        id: 1,
        services: "Service Not Listed",
        Status: "New",
        cost: "1.25",
        icon: <Star />,
        images: tabledataicon1
    },
    {
        id: 2,
        services: "101Sweets",
        Status: "New",
        cost: "1.00",
        icon: <Star />,
        images: tabledataicon2

    },
    {
        id: 3,
        services: "1688",
        Status: "New",
        cost: "1.00",
        icon: <Star />,
        images: tabledataicon3

    },
    {
        id: 4,
        services: "1688",
        Status: "New",
        cost: "1.00",
        icon: <Star />,
        images: tabledataicon3

    },
    {
        id: 5,
        services: "1688",
        Status: "New",
        cost: "1.00",
        icon: <Star />,
        images: tabledataicon3

    },
    {
        id: 6,
        services: "1688",
        Status: "New",
        cost: "1.00",
        icon: <Star />,
        images: tabledataicon3

    },
]

const Tabledata = () => {

    const [tabledata, SetTableData] = useState([]);
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemperPage = 5;

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemperPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemperPage));
    }, [itemOffset, itemperPage]);


    function Items({ currentItems }) {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <div className="tablesec">
                                <Table responsive striped className="table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Services</th>
                                            <th>Status
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </th>
                                            <th>Cost
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16">
                                                    <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                    <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                                                </svg>
                                            </th>
                                            <th>Favorite
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </th>
                                        </tr>
                                    </thead>


                                    <tbody>

                                        {currentItems &&
                                            currentItems.map((item) => (
                                                <tr className="smstabledata" key={item.id}>
                                                    <td>
                                                        <div className="tabeledata">
                                                            <div className="img d-flex">
                                                                <Image
                                                                    src={item.images}
                                                                    loader={imageLoader}
                                                                    layout="fill"
                                                                    className="img-fluid mosaic-1 me-3"
                                                                    alt=""
                                                                />
                                                                <p> {item.services}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="status">{item.Status}</div>
                                                    </td>
                                                    <td>
                                                        <div className="cost">{item.cost}</div>
                                                    </td>
                                                    <td>
                                                        <div className="favorite">{item.icon}</div>
                                                    </td>

                                                </tr>
                                            ))}

                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemperPage) % items.length;
        setItemOffset(newOffset);
    };


    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div className="paginationsec">
                            <Items currentItems={currentItems} />
                            <ReactPaginate
                                className="justify-content-end list-unstyled d-flex"
                                breakLabel="..."
                                nextLabel="next"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={5}
                                pageCount={pageCount}
                                previousLabel="previous"
                                renderOnZeroPageCount={null}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Tabledata;