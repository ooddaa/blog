import { useState } from "react";

function Welcome(): JSX.Element {

  /**
   * I want two screens height.
   * ODA centers in first screen,
   * all text - is centered in the second with background image
   */
  const [windowHeight] = useState(`${window.innerHeight*2}px`)
  // console.log(windowHeight)
  return (
    <div className={`welcome h-[${windowHeight}] w-screen bg-red-500`}>
     <div className="welcome--name h-1/2 w-full bg-white flex justify-center items-center">
        <div className="font-['Italiana'] font-medium text-7xl text-black-500">Oda</div>
      </div>
        <div className="welcome--text h-1/2 w-full flex justify-center items-center">
        </div>
    </div>
  );
}
export default Welcome;
