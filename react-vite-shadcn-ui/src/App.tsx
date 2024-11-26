import { CardPlayer } from "./components/cardplayer";
import { GetAllCharacters } from "./components/getAllCharacters";

export function App() {
  return (

<>

  <div className=" body h-screen w-screen flex justify-center items-center  " >

    <div>
      <CardPlayer/>
      </div>
      
      <div className="">
        <GetAllCharacters/>
      </div>

    </div>
 </>

);
}

