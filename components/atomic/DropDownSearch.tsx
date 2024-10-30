"use client";

import { FC, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "../icons";
import { Button } from "./Button";
import { DropDownMenu } from "./DropDownMenu";

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
      className="relative z-10 mt-auto h-[60px] w-full max-w-[686px] rounded-full text-lg font-semibold"
      ref={dropdownRef}
    >
      <div
        className={`absolute top-0 flex h-[1064px] w-full origin-top transform flex-col items-start gap-4 rounded-[30px] bg-white px-4 py-7 pb-10 pt-[60px] shadow-xl transition focus:outline-none ${
          isOpen
            ? "scale-y-100 opacity-100 duration-100 ease-out"
            : "invisible h-0 scale-y-90 opacity-0 duration-75 ease-in"
        }`}
      >
        <DropDownMenu />
      </div>

      <div className="relative mt-auto flex h-[60px] w-full items-center justify-between rounded-full bg-white text-lg font-semibold shadow-round">
        <button
          className="relative ml-[28px] inline-flex items-center justify-center gap-x-2"
          onClick={toggleMenu}
          onBlur={closeMenu}
        >
          <span className="whitespace-nowrap">Оберіть сферу допомоги</span>
          <ChevronDownIcon open={isOpen} />
        </button>

        <Button size="L" className="mr-[6px]">
          Дізнатися деталі
        </Button>
      </div>
    </div>
  );
};
