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


  function handleExample() {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set("sim", true.toString());

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname, { scroll: false });
    router.refresh();
  }

  // const router = useRouter();

  // function handleGarden() {
  //   router.replace("/garden/" + session?.user?.id);
  // }

  // const accessToken = session?.accessToken;
  // console.log(accessToken);

  if (session?.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <Link
          href={`/garden/${session?.user?.id}`}
          className=" text-black-900 my-auto font-semibold hover:text-gray-400"
        >
          My Garden
        </Link>
        <p className="text-green-900 my-auto font-semibold">
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
      {(!isExample || moveToGarden) && (
        <button
          onClick={() => {
            setExample(true);
            alert(
              "✅ You can now add plants to your -- simulated -- garden, and access it!"
            );
            setMove(false);
          }}
          className="mr-3 inline text-black-900 my-auto ml-auto font-semibold hover:text-gray-400"
        ><Link
        href={`?sim=true`}
        className=" text-black-900 my-auto font-semibold hover:text-gray-400"
      >
          Simulation
          </Link>
        </button>
      )}

      {(isExample && !moveToGarden) && (
        <Link
          href={`/example?sim=true`}
          className="mr-3 inline text-black-900 my-auto ml-auto font-semibold hover:text-gray-400"
        >
          <button onClick={() => setMove(true)}>
          Garden
          </button>
        </Link>
      )}

      <button
        onClick={() => signIn()}
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
