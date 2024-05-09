import React from "react";
import Header from "../components/Home/Header";
import Hero from "../components/Home/Hero";
import PrepareCv from "../components/Home/PrepareCv";
import Footer from "../components/Home/Footer";

function Home() {
  return (
    <div>
      <div>
        <Header />
        <Hero />
      </div>
      <div>
        <PrepareCv />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
