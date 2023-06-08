"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { Container } from "./atomic";

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return pathname === "/" ? null : (
    <section id="bread" className="relative min-h-[150px] bg-white">
      <Container className="h-full">
        <nav aria-label="breadcrumb" className="absolute bottom-0 mb-8">
          <ol>
            <li>
              <Link href="/">Головна</Link>
            </li>

            {pathSegments.map((segment, index) => (
              <li key={index}>
                {index === pathSegments.length - 1 ? (
                  <span>{segment}</span>
                ) : (
                  <Link href={`/${pathSegments.slice(0, index + 1).join("/")}`}>
                    {segment}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </Container>
    </section>
  );
};
