'use client'

import Header from "./components/Header/Header";
import MainBody from "./components/Main/MainBody";
import Footer from "./components/Footer/Footer";


export default function Home() {
  return (
    <div className="min-w-[400px] ">
      <Header></Header>
      <MainBody></MainBody>
      <Footer></Footer>
    </div>
  );
}
