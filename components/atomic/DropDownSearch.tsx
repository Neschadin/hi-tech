"use client";

import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";

import { serviceMenuGroups } from "@/lib/content/services";

import { ChevronDownIcon } from "../icons";

export const DropDownSearch: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((o) => !o);
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
      className="relative z-10 mt-auto w-full max-w-[686px] rounded-full text-base font-semibold md:text-lg"
      ref={dropdownRef}
    >
      <div
        className={`absolute top-0 z-20 w-full origin-top transform overflow-hidden rounded-[30px] bg-white shadow-xl transition ${
          isOpen
            ? "max-h-[min(75vh,920px)] scale-y-100 opacity-100 duration-150 ease-out"
            : "pointer-events-none max-h-0 scale-y-95 opacity-0 duration-100 ease-in"
        }`}
      >
        <div className="max-h-[min(75vh,920px)] overflow-y-auto px-4 pb-6 pt-[72px]">
          <div className="flex flex-col gap-8">
            {serviceMenuGroups.map((group) => (
              <div
                key={group.id}
                className="border-b border-divider-light pb-6 last:border-0"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Link
                    href={group.href}
                    className="text-lg font-bold text-neutral-dark hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {group.title}
                  </Link>
                  <Link
                    href={group.href}
                    className="text-sm font-semibold text-primary hover:underline"
                    onClick={() => setIsOpen(false)}
                  >
                    До категорії →
                  </Link>
                </div>
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <Link
                      key={`${item.href}-${item.label}`}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex min-h-10 items-center rounded-lg border border-divider-light px-4 py-2 text-base font-medium text-gray-700 transition hover:bg-gray-100"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex min-h-[60px] w-full items-center justify-between rounded-full bg-white shadow-round">
        <button
          type="button"
          className="relative z-10 ml-4 inline-flex min-h-11 flex-1 items-center justify-start gap-x-2 py-2 text-left md:ml-7"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span className="whitespace-nowrap">Оберіть сферу допомоги</span>
          <ChevronDownIcon open={isOpen} />
        </button>

        <Link
          href="/services/noutbuky"
          onClick={() => setIsOpen(false)}
          className="relative z-10 mr-1 inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-blue-500 px-5 text-base font-semibold text-white transition hover:bg-blue-600 md:mr-[6px] md:px-7"
        >
          Дізнатися деталі
        </Link>
      </div>
    </div>
  );
};
