import { PropsWithChildren } from "react";
import { Exo_2 } from "next/font/google";
import "./globals.css";

import { Header, Footer, BackgroundOverlay } from "@/components";

const exo2 = Exo_2({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  title:
    "Hi-Tech сервіс - професійний сервісний центр з ремонту техніки та електроніки",
  description:
    "Черкаси | Комп'ютери, ремонт, обслуговування та налаштування. Терміновий ремонт комп'ютерів, ноутбуків та мобільних пристроїв з гарантією. Офіційний гарантійний сервісний центр Lenovo.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="uk">
      <body className={`flex flex-col ${exo2.className}`}>
        <Header />

        {/* <BackgroundOverlay /> */}
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
