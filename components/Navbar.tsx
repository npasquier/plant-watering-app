import Link from "next/link";
import Image from "next/image";

import SignInButton from "./index/SignInButton";

const Navbar = () => {

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-navbar-color rounded-b-lg shadow-xl">
        <Link href={"/" } className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width="0"
            height="0"
            sizes="100vw"
            className="w-10 h-auto object-contain mr-3"
          />
          <h2 className="font-bold">Plant Watering App</h2>
        </Link>

        <SignInButton />
      </nav>
    </header>
  );
};

export default Navbar;