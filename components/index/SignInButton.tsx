"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignInButton = () => {
  const { data: session } = useSession();

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
          Garden
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
    < div className="flex gap-4">
      <button>
        <Link
          href={`/example`}
          className="inline text-black-900 my-auto ml-auto font-semibold hover:text-gray-400"
        >
          Garden-example
        </Link>
      </button>
      
     
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
    </ div>
    
  );
};

export default SignInButton;
