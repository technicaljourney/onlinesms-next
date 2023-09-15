import React from "react";

// layout
import Layout from '../src/layout/layout';

// Sections
import Hero from "../src/sections/home/hero";
import HowItWorks from "../src/sections/home/howitworks";
import Reviews from "../src/sections/home/review";
import AboutUs from "../src/sections/home/aboutus";
import Offer from "../src/sections/home/offer";

const Home = () => {
  return (
    <>
      <Layout>
        {/* Hero Section */}
        <Hero />

        {/* How it Works Section */}
        <HowItWorks />

        {/* Client Reviews Section */}
        <Reviews />

        {/* What we Offer Section */}
        <Offer />

        {/* AboutUs Section */}
        <AboutUs />
      </Layout>
    </>
  )
}

export default Home;