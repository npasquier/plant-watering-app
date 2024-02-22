"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SignInButton = () => {
  const { data: session } = useSession();

  const searchParams = useSearchParams();

  const sim = searchParams.get("sim");

  const router = useRouter();

  if (session?.user) {
    return (
      <div className="flex gap-4 ml-auto max-md:hidden">
        <button
          onClick={() => signOut()}
          className=" text-red-900 hover:text-red-600"
        >
          Sign Out
        </button>
        <Image
          src={session.user.image || "/logo.svg"}
          width={37}
          height={37}
          className="rounded-full"
          alt="profile"
        />
        <Link
          href={`/catalogue/${session?.user?.id}`}
          className="inline my-auto font-semibold text-green-900 hover:text-green-600"
          scroll={false}
        >
          Catalogue
        </Link>
        <Link
          href={`/garden/${session?.user?.id}`}
          className=" text-black-900 my-auto font-semibold hover:text-gray-400"
          scroll={false}
          shallow={true}
        >
          My Garden
        </Link>
        <Link
          className="my-auto font-semibold"
          href={`/profile/${session?.user?.id}`}
        >
          Profile
        </Link>

        <Link
          className="font-semibold ml-auto mr-6 my-auto hover:text-gray-400"
          href={"/about"}
          scroll={false}
        >
          About
        </Link>
      </div>
    );
  } else {
    return (
      <div className="flex gap-4 max-md:hidden">
        {!sim && (
          <>
          
          
            <Link
              className="font-semibold ml-auto mr-6 my-auto hover:text-gray-400"
              href={"/about"}
              scroll={false}
            >
              About
            </Link>

            {/* <Link
              href={`/guide?sim=true`}
              className="my-auto text-white font-semibold  "
              scroll={false}
            >
              <button
                onClick={() => {
                  setExample(true);
                }}
                className="mr-3 inline my-auto ml-auto bg-green-800 hover:bg-green-600 px-5 rounded-full p-3"
              >
                Explore
              </button>
            </Link> */}
          </>
        )}

        {sim && (
          <>
            <button
              onClick={() => {
                router.refresh();
              }}
              className="mr-3 inline my-auto ml-auto text-green-600 hover:text-green-800 "
            >
              <Link
                href={`/ `}
                className="my-auto font-semibold  "
                scroll={false}
                shallow={true}
              >
                Home
              </Link>
            </button>
            {/* <Link
              className="font-semibold ml-auto mr-6 my-auto hover:text-gray-400"
              href={"/map?sim=true&lat=47.478419&lng=-0.563166&category=florist&radius=500"}
              scroll={false}
            >
              Map
            </Link> */}

            <Link
              href={`catalogue?sim=true&nb=1`}
              className="mr-3 inline my-auto ml-auto font-semibold text-green-900 hover:text-green-600"
              scroll={false}
            >
              Catalogue
            </Link>
            <Link
              href={`/example?sim=true`}
              className="mr-3 inline my-auto ml-auto font-semibold text-green-900 hover:text-green-600"
              scroll={false}
              shallow={true}
            >
              Garden
            </Link>
            <Link
              className="font-semibold ml-auto mr-6 my-auto hover:text-gray-400"
              href={"/profile?sim=true"}
              scroll={false}
            >
              Profile
            </Link>
            <Link
              className="font-semibold ml-auto mr-6 my-auto hover:text-gray-400"
              href={"/about?sim=true"}
              scroll={false}
            >
              About
            </Link>
          </>
        )}
      </div>
    );
  }
};

export default SignInButton;
