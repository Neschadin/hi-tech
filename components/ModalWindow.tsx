import { MouseEvent, useEffect } from "react";
import { TFormState } from "@/types";
import { formatPhoneNumber } from "@/utils/validators";
import { CloseIcon } from "./icons/CloseIcon";
import { Spinner } from "./Spinner";

interface IModal {
  handleResetForm: () => void;
  state: TFormState;
}

export const ModalWindow = ({ handleResetForm, state }: IModal) => {
  const { fetchedData, loading, error } = state;

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleResetForm();
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: only attach key listener on mount; handleResetForm is stable for this UI
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Esc") {
        handleResetForm();
      }
    };

    window.addEventListener("keydown", handleEscKey);

    return () => window.removeEventListener("keydown", handleEscKey);
  }, []);

  return (
    <div
      role="presentation"
      onClick={handleBackdropClick}
      className="fixed left-0 top-0 z-50 h-screen w-screen bg-slate-900/50 backdrop-blur-lg backdrop-filter"
    >
      {loading ? (
        <div className="block-center">
          <Spinner />
        </div>
      ) : (
        <div
          className={`block-center absolute m-auto max-h-[90vh] min-w-[min(100vw-2rem,420px)] max-w-lg overflow-y-auto rounded-2xl bg-neutral-100 px-6 py-14 shadow-xl md:px-10 ${
            error ? "border-2 border-red-500" : ""
          }`}
        >
          <div className="absolute right-4 top-4">
            <button
              type="button"
              aria-label="Закрити"
              className="rounded-full p-2 text-neutral-dark hover:bg-white/80"
              onClick={handleResetForm}
            >
              <CloseIcon size="M" />
            </button>
          </div>

          {fetchedData?.data && (
            <div className="flex flex-col gap-3 text-left text-base">
              <h2 className="mb-2 text-center text-xl font-semibold">
                Стан звернення до сервісного центру
              </h2>

              <p>
                Номер акту:
                <span className="ml-2 font-semibold">
                  {fetchedData.data.actNumber}
                </span>
              </p>

              <p>
                Дата звернення:
                <span className="ml-2 font-semibold">
                  {fetchedData.data.dateOfService}
                </span>
              </p>

              <p>
                Дата видачі:
                <span className="ml-2 font-semibold">
                  {fetchedData.data.dateOfIssue}
                </span>
              </p>

              <p>
                Клієнт:
                <span className="ml-2 font-semibold">
                  {fetchedData.data.customer}
                </span>
              </p>

              <p>
                Номер телефону:
                <span className="ml-2 font-semibold">
                  {formatPhoneNumber(fetchedData.data.phoneNumber)}
                </span>
              </p>

              <p>
                Номенклатура:
                <span className="ml-2 font-semibold">
                  {fetchedData.data.nomenclature}
                </span>
              </p>

              <p>
                Серійний номер:
                <span className="ml-2 font-semibold">
                  {fetchedData.data.serialNumber}
                </span>
              </p>

              <p>
                Вартість:
                <span className="ml-2 font-semibold">
                  {fetchedData.data.cost} грн
                </span>
              </p>

              <p>
                Статус:
                <span className="ml-2 font-semibold">
                  {fetchedData.data.status}
                </span>
              </p>

              {fetchedData.data.repairCompleteDate && (
                <p>
                  Дата завершення ремонту:
                  <span className="ml-2 font-semibold">
                    {fetchedData.data.repairCompleteDate}
                  </span>
                </p>
              )}

              <p>
                Результат ремонту:
                <span className="ml-2 font-semibold">
                  {fetchedData.data.repairResult ? "Успішно" : "Неуспішно"}
                </span>
              </p>

              <p>
                Склад робіт:
                <span className="ml-2 font-semibold">
                  {fetchedData.data.worksContent}
                </span>
              </p>
            </div>
          )}

          {error && (
            <h2 className="mb-2 text-center text-xl font-semibold">
              Помилка: {error}
            </h2>
          )}
        </div>
      )}
    </div>
  );
};
