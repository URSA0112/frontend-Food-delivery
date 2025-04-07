import About from "./About";
import Bottom from "./Bottom";
import Logo2 from "./Logo2";
import Menu from "./Menu";
import MovingWords from "./MovingWords";
import Social from "./Social";


export default function Footer() {


  return (
    <footer className="w-full h-auto ">
      <MovingWords></MovingWords>
      <div className="flex my-5 mx-5 justify-between ">
        <Logo2></Logo2>
        <About></About>
        <Menu></Menu>
        <Social></Social>
      </div>
      <Bottom></Bottom>
    </footer>
  );
}