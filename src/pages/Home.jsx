import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Title from "../components/Title"
import MemeGallery from "../components/MemeGallery";
import Bottom from "../components/Bottom";

function Home() {
  return (
    <div>
        <Title />
        <Header />
        <Footer />
        <MemeGallery />
        <Bottom />
    </div>
  );
}

export default Home;