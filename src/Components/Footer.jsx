import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Footer = () => {
  return (
    <div className=" flex flex-col gap-2">
      <div className=" flex justify-center gap-1 items-center">
        <div className=" flex gap-1 items-center">
          <a
            href="https://facebook.com/dhanie-ellah"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className=" bg-[#b1cbf5] text-black rounded-full p-1 w-[10px] h-[10px]"
            />
          </a>
          <a
            href="https://instagram.com/dhanie__ellah"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className=" bg-[#b1cbf5] text-black rounded-full p-1 w-[10px] h-[10px]"
            />
          </a>
          <a
            href="https://twitter.com/dhanie_ellah"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className=" bg-[#b1cbf5] text-black rounded-full p-1 w-[10px] h-[10px]"
            />
          </a>
          <a
            href="https://linkedin.com/in/braide-daniella-biobele"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className=" bg-[#b1cbf5] text-black rounded-full p-1 w-[10px] h-[10px]"
            />
          </a>
        </div>
        <p className=" text-xs text-[#b1cbf5]">Braide Daniella Biobele</p>
      </div>
      <hr className=" bg-[#b1cbf5] outline-none border-none h-[1px]" />
      <div className=' mb-2'>
        <p className=" text-center text-xs text-[#b1cbf5]">
          Coded by {" "}
          <a
            href="https://github.com/dhanie-ellah"
            target="_blank"
            rel="noreferrer"
          >
            Braide Daniella Biobele
          </a>{" "}
          <FontAwesomeIcon icon={faCopyright} /> 2023
        </p>
      </div>
    </div>
  );
}

export default Footer