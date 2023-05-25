import { ReactNode } from "react";
import { Exo_2 } from "next/font/google";
import "./globals.css";

import { Header, Footer } from "@/components";
import Head from "next/head";
import { Container } from "@/components/atomic";

const exo2 = Exo_2({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  title:
    "Hi-Tech сервіс - професійний сервісний центр з ремонту техніки та електроніки",
  description:
    "Черкаси | Комп'ютери, ремонт, обслуговування та налаштування. Терміновий ремонт комп'ютерів, ноутбуків та мобільних пристроїв з гарантією. Офіційний гарантійний сервісний центр Lenovo.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="uk">
      <body className={exo2.className}>
        <div className="flex h-screen flex-col justify-between">
          <Header />

          <Container
            component="main"
            className="border-2"
          >
            {children}
          </Container>

          <Footer />
        </div>
      </body>
    </html>
  );
}
