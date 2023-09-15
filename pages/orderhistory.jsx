import React from 'react'
import Layout from "../src/layout/layout"
import OrderTable from '../src/sections/order/ordertable'

const OrderHistory = () => {
    return (
        <>
            <Layout>
                <OrderTable />
            </Layout>
        </>
    )
}

export default OrderHistory