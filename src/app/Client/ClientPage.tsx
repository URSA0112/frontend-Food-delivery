import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainBody from "../components/Main/MainBody";

export default function ClientPage(){
    return(
        <div className="min-w-[400px] ">
        <Header></Header>
        <MainBody></MainBody>
        <Footer></Footer>
      </div>
    )
}