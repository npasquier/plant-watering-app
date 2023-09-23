"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SignInButton = () => {
  const { data: session } = useSession();

  const [isExample, setExample] = useState(false);

  const [moveToGarden, setMove] =useState(false);

  const router = useRouter();

  useEffect ( () => {

    if(session?.user?.id) {
      router.refresh();
    }

  }
  , [session?.user?.id, isExample])




  if (session?.user) {
    return (
      
      <div className="flex gap-4 ml-auto">
        <Link
          href={`/catalogue/${session?.user?.id}`}
          className="mr-3 inline my-auto ml-auto font-semibold text-green-900 hover:text-green-600"
        >
          Catalogue
        </Link>
        <Link
          href={`/garden/${session?.user?.id}`}
          className=" text-black-900 my-auto font-semibold hover:text-gray-400"
        >
          My Garden
        </Link>
        <p className="text-green-600 my-auto font-semibold">
          {session.user.name}
        </p>
        <Image
          src={session.user.image || "/logo.svg"}
          width={37}
          height={37}
          className="rounded-full"
          alt="profile"
        />
        <button
          onClick={() => signOut()}
          className=" text-red-900 hover:text-red-600"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-4">
      {(!isExample ) && (
        <>
        <Link
        href={`/catalogue`}
        className="mr-3 inline my-auto ml-auto font-semibold text-green-900 hover:text-green-600"
      >
        Catalogue
      </Link>
        <button
          onClick={() => {
            setExample(true);
            alert(
              "✅ You can now add plants to your -- simulated -- garden, and access it!"
            );
            router.refresh();
          }}
          className="mr-3 inline my-auto ml-auto bg-green-800 hover:bg-green-600 px-5 rounded-full p-3"
        ><Link
        href={`?sim=true`}
        className="my-auto text-white font-semibold  "
      >
          Try
          </Link>
        </button>
        </>
      )}

      {(isExample && !moveToGarden) && (
        <>
        <button
          onClick={() => {
            setExample(false);
            router.refresh();
          }}
          className="mr-3 inline my-auto ml-auto bg-green-800 hover:bg-green-600 px-5 rounded-full p-3"
        ><Link
        href={`/`}
        className="my-auto text-white font-semibold  "
      >
          Exit
          </Link>
        </button>
        <Link
        href={`/catalogue?sim=true`}
        className="mr-3 inline my-auto ml-auto font-semibold text-green-900 hover:text-green-600"
      >
        Catalogue
      </Link>
        <Link
          href={`/example?sim=true`}
          className="mr-3 inline my-auto ml-auto font-semibold text-green-900 hover:text-green-600"
        >
          
          Garden
         
        </Link>
        </>
      )}

      <button
        onClick={() => signIn() }
        className="inline custom-btn text-green-700 rounded-full bg-white min-w-[120px] hover:bg-gray-50 font-bold border shadow"
      >
        Sign In{" "}
        <Image
          height={30}
          width={30}
          src="/google.svg"
          alt="google image"
          className="ml-2"
        />
      </button>
    </div>
  );
};

export default SignInButton;
