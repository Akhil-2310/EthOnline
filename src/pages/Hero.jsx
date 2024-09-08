import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://groupworkandcommunication2018.wordpress.com/wp-content/uploads/2018/10/group.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">GroChi</h1>
            <p className="py-6">
              Want to socialize? But hide yout identity? You are at the right
              place! Create Groups with anyone and discuss your fav topics, make
              decisions and work on cool stuff!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
