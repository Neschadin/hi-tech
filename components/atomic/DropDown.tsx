"use client";

import { FC, Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "../icons";

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

export const DropDown: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Menu as="div" className="relative inline-block text-lg font-semibold">
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 translate-y-[-8px]"
        enterTo="transform opacity-100 translate-y-0"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 translate-y-0"
        leaveTo="transform opacity-0 translate-y-[-8px]"
      >
        <Menu.Items className="absolute top-0 flex h-[152px] w-full origin-top-right flex-col items-center justify-evenly rounded-[20px] bg-white px-4 pt-[42px] shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            <a href="#" className="inline-flex gap-x-2">
              <span className="text-neutral-grey">096</span>
              <span className="whitespace-nowrap">800-33-33</span>
            </a>
          </Menu.Item>

          <hr className="w-full" />

          <Menu.Item>
            <a href="#" className="inline-flex gap-x-2">
              <span className="text-neutral-grey">0472</span>
              <span className="whitespace-nowrap">38-38-80</span>
            </a>
          </Menu.Item>
        </Menu.Items>
      </Transition>

      <Menu.Button
        className="relative inline-flex h-[42px] w-full min-w-min items-center justify-center gap-x-2 rounded-full bg-white px-[26px] shadow-sm ring-[1.5px] ring-inset ring-neutral-dark hover:ring-neutral-grey"
        onClick={toggleMenu}
      >
        <span className="text-neutral-grey">063</span>
        <span className="whitespace-nowrap">025-77-77</span>

        <ChevronDownIcon
          className={`h-3 w-3 text-neutral-grey  ${
            isOpen
              ? "rotate-180 transform transition duration-200"
              : "transition duration-200"
          }`}
        />
      </Menu.Button>
    </Menu>
  );
};
