import NavbarComp from "./components/NavbarComp";
import Cover from "./components/Cover"
import Content1 from "./components/Content1"
import FooterComp from "./components/FooterComp"
export default function Home() {
  return (
    <div className='bg-black'>
      <NavbarComp />
      <Cover />
      <Content1 />
      <FooterComp />
    </div>
  );
}
