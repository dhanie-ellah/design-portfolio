import { faGoogleDrive, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Footer = () => {
  return (
    <div className=" flex flex-col gap-2">
      <div className=" flex justify-center gap-1 items-center">
        <div className=" flex gap-1 items-center">
          {/* google drive link */}
          <a
            href="https://drive.google.com/drive/folders/1jVEGdacr-IccTjD39aFLmLbK-MNnHzk8?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGoogleDrive}
              className=" bg-[#b1cbf5] text-black rounded-full p-1 w-[10px] h-[10px]"
            />
          </a>
          {/* instagram link */}
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
          {/* whatsapp link */}
          <a
            href="https://wa.me/+2348020554163"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className=" bg-[#b1cbf5] text-black rounded-full p-1 w-[10px] h-[10px]"
            />
          </a>
        </div>
      </div>
      <hr className=" bg-[#b1cbf5] outline-none border-none h-[1px]" />
      <div className=" mb-2">
        <p className=" text-center text-xs text-[#b1cbf5]">
          Coded by{" "}
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
