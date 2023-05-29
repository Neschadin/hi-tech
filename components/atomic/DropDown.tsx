"use client";

import { FC, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "../icons";

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

export const DropDown: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className="relative inline-block text-lg font-semibold backdrop-blur-2xl"
      ref={dropdownRef}
    >
      <div
        className={`absolute top-0 flex h-[152px] w-full origin-top transform flex-col items-center justify-evenly rounded-[20px] bg-white px-4 pt-[42px] shadow-xl ring-1 ring-black ring-opacity-5 transition focus:outline-none ${
          isOpen
            ? "scale-y-100 opacity-100 duration-100 ease-out"
            : "invisible scale-y-90 opacity-0 duration-75 ease-in"
        }`}
      >
        <a href="#" className="inline-flex gap-x-2">
          <span className="text-neutral-grey">096</span>
          <span className="whitespace-nowrap">800-33-33</span>
        </a>

        <hr className="w-full" />

        <a href="#" className="inline-flex gap-x-2">
          <span className="text-neutral-grey">0472</span>
          <span className="whitespace-nowrap">38-38-80</span>
        </a>
      </div>

      <button
        className="relative inline-flex h-[42px] w-full min-w-min items-center justify-center gap-x-2 rounded-full bg-white px-[26px] shadow-sm ring-[1.5px] ring-inset ring-neutral-grey hover:ring-neutral-dark"
        onClick={toggleMenu}
        onBlur={closeMenu}
      >
        <span className="text-neutral-grey">063</span>
        <span className="whitespace-nowrap">025-77-77</span>
        <ChevronDownIcon open={isOpen} />
      </button>
    </div>
  );
};
