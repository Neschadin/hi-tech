"use client";

import { FC, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "../icons";
import { Button } from "./Button";

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

export const DropDownSearch: FC = () => {
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
      className="relative mt-auto flex h-[60px] w-full max-w-[686px] items-center justify-between rounded-full bg-white pl-[28px] pr-[6px] text-lg font-semibold shadow-lg ring-2 ring-gray-300"
      ref={dropdownRef}
    >
      <div
        className={`absolute top-0 flex h-[500px] w-full  transform flex-col items-center justify-evenly rounded-[30px] px-4 pt-[60px] shadow-xl ring-1 ring-black ring-opacity-5 transition focus:outline-none ${
          isOpen
            ? "translate-y-0 opacity-100 duration-100 ease-out"
            : "translate-y-[-10px] opacity-0 duration-75 ease-in"
        }`}
      >
        {/* <a href="#" className="inline-flex gap-x-2">
          <span className="text-neutral-grey">096</span>
          <span className="whitespace-nowrap">800-33-33</span>
        </a>

        <hr className="w-full" />

        <a href="#" className="inline-flex gap-x-2">
          <span className="text-neutral-grey">0472</span>
          <span className="whitespace-nowrap">38-38-80</span>
        </a> */}
      </div>

      <button
        className="relative inline-flex items-center justify-center gap-x-2"
        onClick={toggleMenu}
        onBlur={closeMenu}
      >
        <span className="whitespace-nowrap">Оберіть сферу допомоги</span>
        <ChevronDownIcon
          className={`h-3 w-3 text-neutral-grey transition duration-200 ${
            isOpen ? "rotate-180 transform" : ""
          }`}
        />
      </button>

      <Button size="L">Дізнатися деталі</Button>
    </div>
  );
};
