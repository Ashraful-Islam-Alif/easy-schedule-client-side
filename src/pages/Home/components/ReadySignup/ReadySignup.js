import React from "react";
import ready from "../../../../media/images/feature/ready.png";
import { Link } from "react-router-dom";

const ReadySignup = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-delay="400"
      className="mt-44 bg-green-400 bg-my-green grid grid-cols-2 items-center lg:mx-52 rounded-lg"
    >
      <div className="text-center md:px-3">
        <h1 className="font-medium text-lg lg:text-2xl">Ready? Let's go</h1>
        <p className="py-2 text-sm">
          7-days trial, no credit card required, no strings attached.
        </p>
        <Link to="/signup" className="btn btn-black btn-sm my-2">
          SignUp
        </Link>
      </div>
      <div>
        <img className="lg:-mt-32 -mt-10" src={ready} alt="" />
      </div>
    </div>
  );
};

export default ReadySignup;
