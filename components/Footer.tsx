import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 my-5 border-t border-gray-100 relative bottom-0">
      <div className="flex justify-between mx-auto ">
        <Image
          src="/logo.svg"
          alt="logo"
          width="0"
          height="0"
          sizes="100vw"
          className="w-10 h-auto object-contain"
        />
        <p className="font-bold mx-4 my-auto">Plant Watering App</p>
        <p className="text-gray-700 my-auto">All rights reserved &copy;</p>
      </div>
    </footer>
  );
};

export default Footer;
