import React from "react";
import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";

export const Widget = () => {
  return (
    <Popover className="absolute bottom-5 right-5">
      <Popover.Panel>Teste de popover</Popover.Panel>
      <Popover.Button className="bg-brand-500 rounded-full h-12 px-3 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-focus:max-w-xs transition-all duration-500 ease-linear">
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
};
