import React from "react";
import WelcomePage from "../components/WelcomePage";
import Blogs from "../components/Blogs";
import VerticalCard from "../components/VerticalCard";
import Double from "../components/Double";
import LatestBlog from "../components/LatestBlog";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar/NavBar";
function Home() {
  return (
    <div>
      <Navbar />
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
