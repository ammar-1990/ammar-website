import React from "react";
 
export function GridSmallBackgroundDemo() {
  return (
    <div className=" w-full absolute inset-0 dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.24]  flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_8%,black)]"></div>
    
    </div>
  );}
