import React from "react";
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Products from "../../components/products/Products";
import { useFetch } from "../../hooks/useFetch";
import Card from "../../components/card/Card";
import MainTop from "../../components/mainTop/MainTop";
import MainCards from "../../components/mainCards/MainCards";
import Footer from "../../components/footer/Footer";

function Home() {


  let apiUrl = `/products?limit=10 `;
  const { data, loading } = useFetch(apiUrl);
  return (
    <section className="home">
      <Navbar/>
      <Header/>
      <Banner/>
      <Card/>
      <Products   data={data?.data} loading={loading}/>
      <MainTop/>
      <MainCards/>
      <Footer/>
    </section>
  );
}

export default Home;