import React from "react";

const Container = ({ children }) => {
  return (
    <div className="bg-third-color text-lightWhite mb-5 rounded-md">
      {children}
    </div>
  );
};

export default Container;
