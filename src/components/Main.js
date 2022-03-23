import Image from "next/image";
import React from "react";
import Container from "./Container";
import { Typewriter } from "react-simple-typewriter";
import { AiFillGithub } from "react-icons/ai";

const Main = () => {
  return (
    <Container>
      <div className="relative h-96">
        <Image
          src="/images/coding.jpg"
          alt="coding"
          layout="fill"
          objectFit="cover"
          className=" rounded-t-lg  "
        />
      </div>
      <div className="bg-third-color text-white">
        <div className=" relative w-44 h-44 mx-auto -mt-10  border-2 rounded-full border-secondary-color ">
          <Image
            src="/images/me.jpeg"
            layout="fill"
            alt="me"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <h1 className=" text-center mt-5 text-2xl">Mohamad Al Jamal</h1>
        <div className="text-secondary-color text-lg text-center  h-1">
          <Typewriter
            words={["Developer", "Freelancer"]}
            loop={0}
            cursor={false}
            typeSpeed={80}
            deleteSpeed={50}
          />
        </div>
        <SocialLinks />
        <div className="flex justify-between text-center  divide-x divide-opacity-20 divide-gray-500">
          <Button>DOWNLOAD CV</Button>
          <Button>CONTACT ME</Button>
        </div>
      </div>
    </Container>
  );
};

export default Main;

const SocialLinks = () => {
  return (
    <ul className="flex gap-3 text-center justify-center text-lg py-10">
      <li>
        <AiFillGithub />
      </li>
      <li>
        <AiFillGithub />
      </li>
      <li>
        <AiFillGithub />
      </li>
    </ul>
  );
};

const Button = ({ children }) => {
  return (
    <p className="  w-full border-t border-opacity-20 border-gray-500 p-5">
      {children}
    </p>
  );
};
