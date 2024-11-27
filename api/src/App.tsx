
import { Bar } from "./components/headerTest";
import { CardList } from "./components/ui/card";
import  walpaper from "@/assets/605599.jpg";
import logo from "@/assets/naruto-logo-shippuden-removebg-preview.png";


export function App() {
  return (
<>

<div className="">
  
<div className="sticky"  >
  <Bar />
 </div>  

    <div className="body img">
      <div style={{
          position: "absolute",
          
      }}>
          <img src={logo} alt="logo" className="logo w-[150px]" />
          <div className="flex ">
          <CardList />
          
        </div>
      </div>
          <img src={walpaper} alt="logo" className="opacity-45" />
        

      </div>

  </div>
</>

);
}

