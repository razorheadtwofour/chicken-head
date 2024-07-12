import React from "react";
import Header from "../components/Header";
import Socials from "../components/Socials";
import Title from "../components/Title"
import MemeGallery from "../components/MemeGallery";
import Bottom from "../components/Bottom";

function Home() {
  return (
    <div>
        <Title />
        <Header />
        <Socials />
        <MemeGallery />
        <Bottom />
    </div>
  );
}

export default Home;