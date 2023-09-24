import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Service from "../Services/Service";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />

      <Service />
      {/*<Slide />*/}
      <Footer />
    </div>
  );
};

export default Home;
