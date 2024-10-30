import { Container } from "../atomic";

export const SpecializationDetails = () => (
  <section className="mb-32 bg-light-bg px-16 py-16">
    <Container className="grid grid-cols-2 gap-8">
      <div>
        <h2 className="mb-8 text-lg font-semibold text-text-on-white">
          Про роздрібний продаж
        </h2>
        <p className="text-sm text-neutral-grey">
          Ми дорожимо своєю репутацією, і тому продаємо тільки оригінальний
          товар з гарантією і сервісною підтримко.Наше завдання полягає не
          тільки в тому, щоб просто продати потрібний товар, але і в тому, щоб
          інформувати і просвіщати покупця. Наші продавці-консультанти уважно
          стежать за новинками IT-ринку і вивчають нові стандарти. Озброївшись
          всебічною інформацією про пристрій і його головних конкурентів, наш
          персонал допоможе прийняти виважене рішення про покупку саме того
          товару, який Вам потрібен.
        </p>
      </div>

      <div>
        <h2 className="mb-8 text-lg font-semibold text-text-on-white">
          Про комерсійний та сервісний відділи
        </h2>
        <p className="mb-6 text-sm text-neutral-grey">
          Також працює відділ по ремонту та обслуговуванню оргтехніки,
          встановлення та налаштування СНПЧ, заправці та відновленню картриджів.
          Так само наші майстри допоможуть Вам налаштувати або оновити програмне
          забезпечення на ноутбуці, планшеті, мобільному телефоні, мережевому
          обладнанні, навігаторі або телевізоре.Спеціалісти компанії «Hi-Tech
          сервіс» проходять регулярні технічні навчання та тренінги, підвищуючи
          свій професійний рівень, знання і навички.
        </p>
        <p className="text-sm text-neutral-grey">
          Зверніть увагу, що тільки в нашому комісійному відділі ви отримуєте
          гарантію на придбану у нас техніку! Терміни гарантії від 1 до 12 міс.
          Так само тільки у нас, Ви можете продати свою техніку, виручивши до
          90% від її ринкової вартості.
        </p>
      </div>
    </Container>
  </section>
);
