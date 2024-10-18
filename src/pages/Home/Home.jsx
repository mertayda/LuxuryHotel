import React from "react";
import Hero from "../../components/Hero/Hero";
import BookingForm from "../../components/Plan/BookingForm";
import Oasis from "../../components/Oasis/Oasis";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <BookingForm></BookingForm>
      <Oasis></Oasis>
      <Footer></Footer>
    </>
  );
};

export default Home;
