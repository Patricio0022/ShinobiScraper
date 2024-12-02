import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GridCard } from "./components/ui/card";
import { CharacterDetails } from "./components/ui/getCharById";
import { DenseAppBar } from "./components/toolbar";
import walpaper from "@/assets/297090-final.jpg";
import logo from "@/assets/naruto-logo-shippuden-removebg-preview.png";

export function App() {
  return (
    <Router>
      <div className="relative">
        <div className="sticky top-0 z-10">
          <DenseAppBar />
        </div>

        <div
          className="relative"
          style={{
            backgroundImage: `url(${walpaper})`,
            backgroundSize: "auto",
            backgroundPosition: "top left",
            backgroundRepeat: "repeat",
            zIndex: 0,
            minHeight: "100vh",
            width: "100%",
            position: "relative",
          }}
        >
          <div className="flex justify-start items-start">
            <img src={logo} alt="logo" className="logo w-[150px]" />
          </div>

          <div className="flex z-20 text-center w-full min-h-screen flex-col justify-center items-center mt-5">

            <Routes>
              <Route path="/" element={<GridCard />} />
              <Route path="/character/:id" element={<CharacterDetails />} />
            </Routes>

            
          </div>
        </div>
      </div>
    </Router>
  );
}
