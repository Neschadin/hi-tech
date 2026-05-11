import Link from "next/link";

import { siteConfig } from "@/config/site";

import { Container } from "./atomic";
import { InstagramIcon } from "./icons";

const footerLinkClass = "hover:text-white hover:underline underline-offset-4";

export const Footer = () => {
  return (
    <footer className="mt-auto bg-gray-900 pb-10 pt-16 text-white">
      <Container className="min-h-[264px] flex-col justify-between">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-4">
          <div className="flex max-w-[280px] flex-col justify-between gap-4">
            <p className="text-2xl font-bold">Hi-Tech</p>

            <span className="text-sm">
              Магазин цифрової техніки та сервісний центр у м. Черкаси
            </span>

            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <InstagramIcon />
              <span className="text-sm">Instagram</span>
            </a>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-4 font-medium sm:grid-cols-3 lg:max-w-2xl">
            <div className="col-span-2 text-lg font-semibold text-divider sm:col-span-3">
              Ремонт
            </div>
            <Link className={footerLinkClass} href="/services/noutbuky">
              Ноутбуки
            </Link>
            <Link className={footerLinkClass} href="/services/printery-mfu">
              Принтери та МФУ
            </Link>
            <Link className={footerLinkClass} href="/contacts">
              Мобільні пристрої
            </Link>
            <Link className={footerLinkClass} href="/about-us">
              Інша техніка
            </Link>
            <Link className={footerLinkClass} href="/services/lenovo">
              Гарантія Lenovo
            </Link>
            <Link className={footerLinkClass} href="/contacts">
              Відновлення даних
            </Link>
          </div>

          <div className="flex flex-col gap-4 font-medium">
            <p className="text-lg font-semibold text-divider">Hi-Tech</p>
            <Link className={footerLinkClass} href="/about-us">
              Про нас
            </Link>
            <Link className={footerLinkClass} href="/#poslugy">
              Послуги
            </Link>
            <Link className={footerLinkClass} href="/contacts">
              Контакти
            </Link>
            <Link className={footerLinkClass} href="/status">
              Статус ремонту
            </Link>
          </div>
        </div>

        <hr className="mb-2 mt-10 border-divider" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm font-semibold sm:flex-row md:gap-10">
          <span>
            © ТОВ &quot;Хай-Тек Трейд&quot;, {new Date().getFullYear()}. Усі
            права захищені.
          </span>
          <span className="md:ml-auto">
            <Link href="/contacts" className="hover:underline">
              Політика конфіденційності
            </Link>
          </span>
          <span>
            <Link href="/contacts" className="hover:underline">
              Умови користування
            </Link>
          </span>
        </div>
      </Container>
    </footer>
  );
};
