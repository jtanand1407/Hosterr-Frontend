import React from "react";

function Body() {
  return (
    <div className="px-3">
      <div className="flex justify-center items-center">
        <img className="w-64 md:w-96 md:h-96 -rotate-[45deg]" src="./assets/Blue-Shape.svg" alt="No"/>
        <img
          className="absolute  md:w-96 md:h-96 h-32 w-64 -rotate-[30deg]"
          src="./assets/Pink-Shape.svg"
          alt="No"
        />
        <img
          className="absolute w-64 md:w-96 md:h-96 -rotate-[15deg]"
          src="./assets/Purple-Shape.svg"
          alt="No"
        />
        <img className="absolute  w-64 md:w-96 md:h-96" src="./assets/Hero-Model.png" alt="No"/>
      </div>
      <div className="space-y-3">
        <h1 className="font-playfair font-bold text-[45px] leading-tight">
          Host your website in less than 5 minutes
        </h1>
        <p className="text-gray-400">
          With Hoster, get your website up and running in no less than 5 minutes
          with the most competitive pricing packages available online.
        </p>
        <form action="">
          <div className="flex flex-col space-y-2 md:flex-row">
            <input type="email" placeholder="Enter email address"></input>
            <button className="bg-blue-400 px-3 py-1 rounded-md text-white hover:bg-blue-600">
              Join Waitlist
            </button>
          </div>
        </form>
        <div className="flex gap-2">
          <img src="./assets/Checkmark.svg" alt="No"/>
          <h3>No spam ever, unsubscribe anytime</h3>
        </div>
      </div>
    </div>
  );
}

export default Body;
