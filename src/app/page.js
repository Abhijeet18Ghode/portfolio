
import Image from "next/image";
import Navbar from "./components/navbar";
import Main from "./components/main";
import About from "./components/about";
import Skills from "./components/skills";
import Work from "./components/work"
import Experience from "./components/experience"
import Collab from "./components/collab";
import Footer from "./components/footer";
export default function Home() {
  return (
   <div className="flex flex-col p-5 w-full   gap-5 phone:p-2  ">
     <Navbar/>
     <div className="w-full flex flex-col gap-24">
     <Main/>
     <About/>
     <Skills/>
     <Work/>
     <Experience/>
     <Collab/>
     <div className="flex flex-col gap-5">
     <hr className="w-full pl-5 pr-5 opacity-15"/>
     <div className="p-0">
     <Footer/>
     </div>
     </div>
     </div>
   </div>
  );
}
