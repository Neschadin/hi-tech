"use client";

import { FC, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "../icons";
import { KyivstarNumber, LifeNumber } from "./PhoneNumbers";

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

export const DropDown: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (event: FocusEvent | MouseEvent) => {
    dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", closeMenu);
      document.addEventListener("focusin", closeMenu);
    } else {
      document.removeEventListener("mousedown", closeMenu);
      document.removeEventListener("focusin", closeMenu);
    }

    return () => {
      document.removeEventListener("mousedown", closeMenu);
      document.removeEventListener("focusin", closeMenu);
    };
  }, [isOpen]);

  return (
    <div
      className="relative inline-block text-lg font-semibold"
      ref={dropdownRef}
    >
      <button
        className="relative z-10 inline-flex h-[42px] w-full min-w-min items-center justify-center gap-x-2 rounded-full bg-white px-[26px] shadow-sm ring-[1.5px] ring-inset ring-neutral-grey hover:ring-neutral-dark"
        onClick={toggleMenu}
      >
        <a href="tel:0472383880" className="inline-flex gap-x-2">
          <span className="text-neutral-grey">063</span>
          <span className="whitespace-nowrap">025-77-77</span>
        </a>
        <ChevronDownIcon open={isOpen} />
      </button>

      <div
        className={`absolute top-0 flex h-[152px] w-full origin-top transform flex-col items-center justify-evenly rounded-[20px] bg-white px-4 pt-[42px] shadow-xl ring-1 ring-black ring-opacity-5 transition focus:outline-none ${
          isOpen
            ? "scale-y-100 opacity-100 duration-100 ease-out"
            : "invisible scale-y-90 opacity-0 duration-75 ease-in"
        }`}
      >
        <LifeNumber onClick={toggleMenu} />

        <hr className="w-full" />

        <KyivstarNumber onClick={toggleMenu} />
      </div>
    </div>
  );
};
