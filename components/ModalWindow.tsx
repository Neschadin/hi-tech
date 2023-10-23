import { TFormState } from "@/types";
import { CloseIcon } from "./icons";
import { MouseEvent, useEffect } from "react";
import { ProgressBar } from "react-loader-spinner";
import { formatPhoneNumber } from "@/utils/validators";

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

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Esc") {
        handleResetForm();
      }
    };

    window.addEventListener("keydown", handleEscKey);

    return () => window.removeEventListener("keydown", handleEscKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed left-0 top-0 z-50 h-screen w-screen bg-slate-900 bg-opacity-50 backdrop-blur-lg backdrop-filter"
    >
      {loading ? (
        <ProgressBar
          height="80"
          width="80"
          wrapperClass="block-center"
          borderColor="white"
          barColor="#3b82f6"
        />
      ) : (
        <div
          className={`block-center absolute m-auto min-w-fit rounded-md bg-neutral-100 px-8 py-16 ${
            error ? "border-2 border-red-500" : ""
          }`}
        >
          <div className="absolute right-4 top-4">
            <button onClick={handleResetForm}>
              <CloseIcon size="M" />
            </button>
          </div>

          {fetchedData?.data && (
            <div className="flex flex-col gap-3">
              <h2 className="mb-4 text-center text-xl font-medium">
                Стан звернення до СЦ
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
                с/н:
                <span className="ml-2 font-semibold">
                  {fetchedData.data.serialNumber}
                </span>
              </p>

              <p>
                Вартість:
                <span className="ml-2 font-semibold">
                  {fetchedData.data.cost}грн.
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
                  {fetchedData.data.repairResult ? "Успішно" : "Не успішно"}
                </span>
              </p>

              <p>
                Склад рабіт:
                <span className="ml-2 font-semibold">
                  {fetchedData.data.worksContent}
                </span>
              </p>
            </div>
          )}

          {error && (
            <h2 className="mb-2 ml-2 text-xl font-semibold">
              Помилка: {error}
            </h2>
          )}
        </div>
      )}
    </div>
  );
};
