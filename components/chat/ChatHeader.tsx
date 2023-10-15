import Image from "next/image";

const ChatHeader = () => {
  return (
    <div className="w-full flex gap-1 justify-center items-center text-zinc-800 overflow-hidden">
      <Image
        src="/gardener.svg"
        width={80}
        height={80}
        priority
        alt="Picture of gardener AI"
      />
      {/* <p className="text-bold px-2">Gardenbuddy support</p> */}
    </div>
  );
};

export default ChatHeader;
