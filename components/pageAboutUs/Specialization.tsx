import { PropsWithChildren } from "react";

import { Container } from "../atomic";
import { didactGothic } from "@/utils";

import { ScrewDriverIcon, ShoppingCart, StoreIcon } from "../icons";

const Div = ({ children }: PropsWithChildren) => (
  <div className="mx-auto flex min-h-[250px] max-w-[448px] flex-col items-center gap-6 rounded-lg border border-gray-300 px-3 py-6 md:w-full">
    {children}
  </div>
);

export const Specialization = () => (
  <Container
    component="section"
    className="my-16 flex-col gap-16 text-center sm:my-32"
  >
    <h2 className={`${didactGothic} text-[40px]`}>Ми спеціалізуємося на</h2>

    <div className="flex flex-col gap-4 md:flex-row md:gap-8">
      <Div>
        <StoreIcon />
        <p className="text-xl font-medium">Роздрібний продаж</p>
        <span className="font-medium text-text-on-white">
          Комп’ютерної техніки, телевізорів, фотоапаратів, оргтехніки,
          комп’ютерних комплектуючих, периферії, мережевого обладнання,
          витратних матеріалів та на постачання комп’ютерів власної збірки.
        </span>
      </Div>

      <Div>
        <ScrewDriverIcon />
        <p className="text-xl font-medium">Сервісний відділ</p>
        <span className="font-medium text-text-on-white">
          Спеціалізується на післягарантійному обслуговуванні IT техніки і
          електронного обладнання, а саме: системних блоків, моноблоків,
          ноутбуків, моніторів, та різних акустичних систем.
        </span>
      </Div>

      <Div>
        <ShoppingCart />
        <p className="text-xl font-medium">Комісійний відділ</p>
        <span className="font-medium text-text-on-white">
          Пропонує можливість купити недорого, а також вигідно продати
          непотрібну техніку. Ми продаємо тільки комісійну техніку, а це
          значить, що ціна навіть на нову техніку значно нижче, ніж в будь-якому
          магазині.
        </span>
      </Div>
    </div>
  </Container>
);
