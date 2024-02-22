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
        className={`sidebar-container fixed w-full h-full overflow-hidden justify-center bg-nice-plant-color grid ${
          isOpen ? "grid" : "none"
        } pt-[120px] left-0  ${isOpen ? "z-50" : "-z-10"}`}
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

        <ul
          className={`sidebar-nav text-center leading-relaxed text-xl ${
            isOpen ? "z-10" : "z-0"
          }`}
        >
          <li>
            <Link href="/about" onClick={toggle}>
              <p>About</p>
            </Link>
          </li>
          {session?.user && (
            <>
              <li>
                <Link
                  href={`/catalogue/${session?.user?.id}`}
                  className="my-auto text-green-800 font-semibold"
                  scroll={false}
                  onClick={toggle}
                >
                  Catalogue
                </Link>
              </li>
              <li>
                <Link
                  href={`/garden/${session?.user?.id}`}
                  className="my-auto text-green-800 hover:text-green-600 font-semibold"
                  scroll={false}
                  shallow={true}
                  onClick={toggle}
                >
                  My Garden
                </Link>
              </li>
              <li>
                <p className="flex flex-row text-gray-800 hover:text-gray-600 my-auto ">
                  {session.user.name}
                </p>
              </li>
              <li>
                <button
                  onClick={() => {
                    signOut();
                    toggle;
                  }}
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
                  className="my-auto text-green-800 hover:text-green-600 font-semibold"
                  scroll={false}
                  onClick={() => {
                    setExample(true);
                    toggle();
                  }}
                >
                  Explore
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    signIn();
                    toggle();
                  }}
                  className="my-auto text-green-800 hover:text-green-600 font-semibold"
                >
                  Sign in
                </button>
              </li>
            </>
          )}
          {isExample && !session && (
            <>
              <li>
                <Link
                  href={`/ `}
                  className="my-auto text-red-800 hover:text-red-600 font-semibold"
                  scroll={false}
                  onClick={() => {
                    setExample(false);
                    toggle();
                    router.refresh();
                  }}
                >
                  Exit
                </Link>
              </li>
              <li>
                <Link
                  href={`catalogue?sim=true&nb=1`}
                  className="my-auto text-green-800 hover:text-green-600 font-semibold"
                  scroll={false}
                  shallow={true}
                  onClick={toggle}
                >
                  Catalogue
                </Link>
              </li>
              <li>
                <Link
                  href={`/example?sim=true`}
                  className="my-auto text-green-800 hover:text-green-600 font-semibold"
                  scroll={false}
                  shallow={true}
                  onClick={toggle}
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
