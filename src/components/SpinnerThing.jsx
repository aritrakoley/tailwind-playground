import React from "react";

const SpinnerThing = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-400">
      <div className="w-[50rem] h-[50rem] relative flex justify-center items-center bg-yellow-200 font-bold p-2 text-center text-5xl">
        {/* <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg" alt="" /> */}
        <p className="animate-[spin_30s_linear_infinite]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
          cupiditate deserunt inventore autem recusandae voluptatibus culpa
          sequi consequuntur. Velit aliquid minima qui enim incidunt odit sequi
          at vero. Esse itaque dolor, eligendi consequatur porro impedit,
          delectus vel tenetur laborum quia tempora animi amet. Beatae enim,
          unde numquam deserunt ratione perferendis.
        </p>
        <div className="absolute flex items-center justify-center w-full h-full p-2 font-bold text-center rounded-full backdrop-blur-md bg-red-500/5">
          asd
        </div>
      </div>
    </div>
  );
};

export default SpinnerThing;
