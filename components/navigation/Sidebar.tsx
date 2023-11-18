"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  const { data: session } = useSession();

  const [isExample, setExample] = useState(false);

  const router = useRouter();

  return (
    <>
      <div
        className={`sidebar-container fixed w-full h-full overflow-hidden justify-center  bg-nice-plant-color grid pt-[120px] left-0 ${isOpen && "z-10"}`}
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          transitionDuration: "500ms",
          top: ` ${isOpen ? "0" : "-1%"}`,
        }}
      >
        <button className="absolute right-0 p-5" onClick={toggle}>
          {/* Close icon */}
          <svg width="48" height="48" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        <ul className="sidebar-nav text-center leading-relaxed text-xl">
          <li>
            <Link href="/about" onClick={toggle}>
              <p>About Us</p>
            </Link>
          </li>
          {session?.user && (
            <>
              <li>
                <Link
                  href={`/catalogue/${session?.user?.id}`}
                  className="my-auto text-green-800 font-semibold"
                  scroll={false}
                >
                  Catalogue
                </Link>
              </li>
              <li>
                <Link
                  href={`/garden/${session?.user?.id}`}
                  className="my-auto text-green-800 font-semibold"
                  scroll={false}
                  shallow={true}
                >
                  My Garden
                </Link>
              </li>
              <li>
                <p className="flex flex-row text-gray-800 my-auto ">
                  {session.user.name}
                </p>
              </li>
              <li>
                <button
                  onClick={() => signOut()}
                  className=" text-red-900 hover:text-red-600"
                >
                  Sign Out
                </button>
              </li>
            </>
          )}

          {!isExample && !session && (
            <>
              <li>
                <Link
                  href={`/guide?sim=true`}
                  className="my-auto text-green-800 font-semibold"
                  scroll={false}
                >
                  <button
                    onClick={() => {
                      setExample(true);
                    }}
                    className="inline my-auto ml-auto hover:bg-green-600 rounded-full p-3"
                  >
                    Explore
                  </button>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => signIn()}
                  className="my-auto text-green-800 font-semibold"
                >
                  Sign in
                </button>
              </li>
            </>
          )}
          {isExample && !session && (
            <>
              <li>
                <button
                  onClick={() => {
                    setExample(false);
                    router.refresh();
                  }}
                >
                  <Link
                    href={`/ `}
                    className="my-auto text-red-800 font-semibold"
                    scroll={false}
                    shallow={true}
                  >
                    Exit
                  </Link>
                </button>
              </li>
              <li>
                <Link
                  href={`catalogue?sim=true&nb=1`}
                  className="my-auto text-green-800 font-semibold"
                  scroll={false}
                >
                  Catalogue
                </Link>
              </li>
              <li>
                <Link
                  href={`/example?sim=true`}
                  className="my-auto text-green-800 font-semibold"
                  scroll={false}
                  shallow={true}
                >
                  Garden
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
