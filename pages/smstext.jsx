import React from "react";

// layout
import Layout from "../src/layout/layout";

// section
import DataTable from "../src/sections/smstext/datatable";
import Search from "../src/sections/smstext/search"
const Smstext = () => {

    return (
        <>
            <Layout>
                {/* Search */}
                <Search />
                {/* Smstabledata */}
                <DataTable />
            </Layout>
        </>
    )
}

export default Smstext;