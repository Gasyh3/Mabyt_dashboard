import React from "react";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import ListofServices from "../../components/ListofServices/ListofServices";

function Main() {
  return (
    <div className="main">
      <Hero />
      <ListofServices />
      <Footer />
    </div>
  );
}

export default Main;
