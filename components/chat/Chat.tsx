import { FC } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

const Chat: FC = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="relative bg-white z-40 shadow"
    >
      <AccordionItem value="item-1">
        <div className="fixed right-8 w-30 bottom-8 bg-opacity-900  collapsible overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <AccordionTrigger className="border-b border-zinc-300 ">
              <ChatHeader /> 
            </AccordionTrigger>
            <AccordionContent>
              <div className="py-1 flex flex-col h-96 lg:w-96 w-80 bg-white mt-1 rounded-xl">
                <ChatMessages className="px-2 py-3 flex-1"/>
                <ChatInput className="py-1"/>
              </div>
            </AccordionContent>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default Chat;
