import Link from "next/link";
import Image from "next/image";
import SignInButton from "./SignInButton";

const Navbar = ({
  toggle,
  isOpen,
}: {
  toggle: () => void;
  isOpen: boolean;
}) => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 ">
        <Link
          href={"/"}
          className="flex justify-center items-center"
          scroll={false}
        >
          <Image
            src="/logo.svg"
            alt="logo"
            width="0"
            height="0"
            sizes="100vw"
            className="w-10 h-auto object-contain mr-3"
          />
          <h2 className="font-bold text-green-900">Plant Watering App</h2>
        </Link>

       



        <SignInButton />

        <button
          type="button"
          className={`inline-flex items-center md:hidden`}
          style={{
            opacity: `${!isOpen ? "1" : "0"}`,
            top: ` ${!isOpen ? "0" : "-100%"}`,
          }}
          onClick={toggle}
        >
          {/* Menu icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path fill="#000" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
