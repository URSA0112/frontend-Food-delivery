'use client'

import Header from "./components/Header/Header";
import MainBody from "./components/Main/Featured";
import Footer from "./components/Footer/Footer";
import Categories from "./components/Main/CategoriesList";


export default function Home() {
  return (
    <>
      <Header></Header>
      <MainBody></MainBody>
      <Categories></Categories>
      <Footer></Footer>
    </>
  );
}
