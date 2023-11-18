"use client";

import Image from "next/image";
import { useState } from "react";

const ChatHeader = () => {
  const [openBubble, setOpenBubble] = useState(false);

  return (
    <div className="w-full flex gap-1 justify-center items-center text-zinc-800 overflow-hidden">
      {!openBubble && (
        <div
          className={`bubble bubble-bottom-right {openBubble && "bg-blue-300" }`}
        >
          Hey ! You can also chat with me here. 😊
        </div>
      )}
      <Image
        src="/gardener.svg"
        width={80}
        height={80}
        priority
        alt="Picture of gardener AI"
        onClick={() => setOpenBubble(true)}
      />
      {/* <p className="text-bold px-2">Gardenbuddy support</p> */}
    </div>
  );
};

export default ChatHeader;
