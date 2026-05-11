"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { Container } from "./atomic";
import { ChevronDownIcon } from "./icons";
import { getServiceBySlug } from "@/lib/content/services";

type Crumb = { href: string; label: string };

function crumbsForPath(pathname: string): Crumb[] {
  const segments = pathname.split("/").filter(Boolean);
  const out: Crumb[] = [{ href: "/", label: "Головна" }];

  if (segments.length === 0) return out;

  if (segments[0] === "services" && segments[1]) {
    const svc = getServiceBySlug(segments[1]);
    out.push({ href: "/#poslugy", label: "Послуги" });
    out.push({
      href: pathname,
      label: svc?.breadcrumbLabel ?? segments[1]
    });
    return out;
  }

  const map: Record<string, { href: string; label: string }> = {
    "about-us": { href: "/about-us", label: "Про нас" },
    contacts: { href: "/contacts", label: "Контакти" },
    status: { href: "/status", label: "Статус ремонту" }
  };

  const key = segments[0];
  const mapped = map[key];
  if (mapped) {
    out.push(mapped);
  } else {
    out.push({ href: pathname, label: key });
  }

  return out;
}

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const crumbs = crumbsForPath(pathname);

  if (pathname === "/") return null;

  return (
    <section
      id="bread"
      className="relative min-h-[120px] bg-white md:min-h-[150px]"
    >
      <Container className="h-full">
        <nav
          aria-label="breadcrumb"
          className="absolute bottom-0 mb-6 flex flex-wrap items-center gap-1 text-sm md:mb-8"
        >
          {crumbs.map((c, i) => (
            <span
              key={`${i}-${c.label}`}
              className="inline-flex items-center gap-1"
            >
              {i > 0 ? (
                <ChevronDownIcon className="mx-1 -rotate-90 shrink-0" />
              ) : null}
              {i === crumbs.length - 1 ? (
                <span className="font-semibold text-neutral-dark">
                  {c.label}
                </span>
              ) : (
                <Link
                  href={c.href}
                  className="text-neutral-grey hover:text-primary"
                >
                  {c.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </Container>
    </section>
  );
};
