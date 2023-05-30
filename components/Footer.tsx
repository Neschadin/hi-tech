// import styles from "./footer.module.css";

import Link from "next/link";
import { Container } from "./atomic";
import { InstagramIcon } from "./icons";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 pb-10 pt-16 text-white">
      <Container className="min-h-[264px] justify-between flex-col">
        <div className="flex justify-between gap-4">
          <div className="flex h-[154px] max-w-[208px] flex-col justify-between">
            <p className="text-2xl font-bold">Hi-Tech</p>

            <span className="text-sm">
              {"Магазин цифрової техніки та сервісний центр у м.Черкаси"}
            </span>

            <Link
              href={process.env.INSTA_URL || ""}
              className="flex items-center gap-2"
            >
              <InstagramIcon />
              <span className="text-sm">Instagram</span>
            </Link>
          </div>

          <div className="grid w-[328px] grid-cols-1 grid-rows-3 gap-x-8 gap-y-4 font-medium sm:ml-[20%] md:grid-cols-3">
            <p className="col-span-full text-lg font-semibold text-divider">
              Ремонт
            </p>
            <span>Мобільні пристрої</span>
            <span>Принтери та МФУ</span>
            <span>Ремонт Apple</span>
            <span>Інша техніка</span>
            <span>Відновлення даних</span>
            <span>Ноутбуки</span>
          </div>

          <div className="grid gap-y-4 font-medium">
            <p className="text-lg font-semibold text-divider">Hi-Tech</p>
            <span>Про Нас</span>
            <span>Послуги</span>
            <span>Контакти</span>
          </div>
        </div>

        <hr className="mb-2 mt-10 border-divider" />

        <div className="flex flex-col items-center justify-between text-center text-sm font-semibold sm:flex-row md:gap-10">
          <span>{"© ТОВ «Хай-Тек Трейд», 2023. Всі права захищені."}</span>
          <span className="md:ml-auto">Політика конфіденційності </span>
          <span>Умови користування </span>
        </div>
      </Container>
    </footer>
  );
};
