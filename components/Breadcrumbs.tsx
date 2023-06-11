"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { Container } from "./atomic";
import { ChevronDownIcon } from "./icons";
import { genKeyId } from "@/utils/genKeyId";

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return pathname === "/" ? null : (
    <section id="bread" className="relative min-h-[150px] bg-white">
      <Container className="h-full">
        <nav
          aria-label="breadcrumb"
          className="absolute bottom-0 mb-8 flex items-center text-sm"
        >
          <Link href="/">Головна</Link>

          {pathSegments.map((segment, index) => (
            <div key={genKeyId()} className="flex items-center">
              <ChevronDownIcon className="mx-2 -rotate-90" />

              {index === pathSegments.length - 1 ? (
                <span className="font-semibold">{segment}</span>
              ) : (
                <Link href={`/${pathSegments.slice(0, index + 1).join("/")}`}>
                  {segment}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </Container>
    </section>
  );
};
