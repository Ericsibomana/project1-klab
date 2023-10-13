import React from "react";
import Header from "../components/Header";
import WelcomePage from "../components/WelcomePage";
import Blogs from "../components/Blogs";
import VerticalCard from "../components/VerticalCard";
import Double from "../components/Double";
import LatestBlog from "../components/LatestBlog";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <WelcomePage />
      <Blogs />
      <VerticalCard />
      <Double />
      <LatestBlog />
      <Footer />
    </div>
  );
}

export default Home;
