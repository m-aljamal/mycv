import Image from "next/image";
import React from "react";
import Container from "./Container";
const Main = () => {
  return (
    <Container>
      <div className="relative h-full">
        <Image
          src="/images/coding.jpg"
          alt="coding"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
        <div className="  z-50 absolute bg-third-color  right-0 left-0 top-1/2 bottom-0 ">
          <div className="text-white">
            <div className=" relative w-24 h-24 mx-auto -mt-10  border-2 rounded-full border-secondary-color ">
              <Image
                src="/images/me.jpeg"
                layout="fill"
                alt="me"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h1>Mohamad Al Jamal</h1>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Main;
