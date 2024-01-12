import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import tyssImage from "../asset/TyssPic.webp"

const Carosel = () => {
  // !aos animation:
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="h-[80vh] w-[100%]">
      <div className="flex justify-center items-center h-[80vh] w-[100%]">
        <img
          className="h-[40vh] w-[80%]"
          data-aos="zoom-in"
          src={tyssImage}
          alt="Tyss"
        />
      </div>
    </div>
  );
}

export default Carosel