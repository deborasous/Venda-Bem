import React from "react";

//import components
import Advantages from "../../components/advantages/Advantages";
import BannerBody from "../../components/bannerBody/BannerBody";
import FeaturedProduct from "../../components/featuredProducts/FeaturedProduct";
import Header from "../../components/header/Header";
import InfoHome from "../../components/infoHome/InfoHome";
import MenuIcon from "../../components/menuIcon/MenuIcon";

//import sass
import "./Home.sass";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Advantages />
        <MenuIcon />
        <FeaturedProduct />
        <BannerBody />
        <InfoHome />
      </main>
    </>
  );
};

export default Home;
