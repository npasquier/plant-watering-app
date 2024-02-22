"use client";

import Image from "next/image";
import { useState } from "react";

const ChatHeader = () => {
  const [openBubble, setOpenBubble] = useState(false);

  return (
    <div className="w-full flex gap-1 justify-center items-center text-zinc-800 overflow-hidden">
      {!openBubble ? (
        <Image
        src="/chat.svg"
        width={50}
        height={50}
        priority
        alt="Picture of chat bubble"
        onClick={() => setOpenBubble(true)}
      />
      ) : (
      <Image
        src="/gardener.svg"
        width={80}
        height={80}
        priority
        alt="Picture of gardener AI"
        onClick={(prev) => setOpenBubble(!prev)}
      />)
      }
      {/* <p className="text-bold px-2">Gardenbuddy support</p> */}
    </div>
  );
};

export default ChatHeader;
