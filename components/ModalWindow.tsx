import { TFormState } from "@/types";
import { CloseIcon } from "./icons";
import { MouseEvent, useEffect } from "react";
import { ProgressBar } from "react-loader-spinner";

interface IModal {
  handleResetForm: () => void;
  state: TFormState;
}

export const ModalWindow = ({ handleResetForm, state }: IModal) => {
  const {
    fetchedData,
    actNumber,
    phoneNumber,
    actNumberValid,
    phoneNumberValid,
    loading,
    error,
  } = state;

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

    // if (data) {
    window.addEventListener("keydown", handleEscKey);
    // }

    return () => window.removeEventListener("keydown", handleEscKey);
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
          className={`absolute block-center rounded-md bg-neutral-100 px-8 py-16 min-w-fit m-auto ${
            error ? "border border-red-500" : ""
          }`}
        >
          <div className="close-btn absolute right-4 top-4 text-3xl">
            <button onClick={handleResetForm}>
              <CloseIcon size="M" />
            </button>
          </div>

          {fetchedData?.data && (
            <div className="flex flex-col gap-3">
              <h2 className="mb-2 text-xl font-medium">Стан звернення до СЦ</h2>
              <p>Номер акту: {fetchedData.data.actNumber}</p>
              <p>Дата звернення: {fetchedData.data.dateOfService}</p>
              <p>Дата видачі: {fetchedData.data.dateOfIssue}</p>
              <p>Клієнт: {fetchedData.data.customer}</p>
              <p>Номер телефону: {fetchedData.data.phoneNumber}</p>
              <p>Номенклатура: {fetchedData.data.nomenclature}</p>
              <p>с/н: {fetchedData.data.serialNumber}</p>
              <p>
                {/* Додаткова інформація: {fetchedData.data.additionalInfo} */}
              </p>
              <p>Вартість: {fetchedData.data.cost}</p>
              <p>Статус: {fetchedData.data.status}</p>
              {fetchedData.data.repairCompleteDate && (
                <p>
                  Дата завершення ремонту: {fetchedData.data.repairCompleteDate}
                </p>
              )}
              <p>
                Результат ремонту:{" "}
                {fetchedData.data.repairResult ? "Успішно" : "Не успішно"}
              </p>
              <p>Склад рабіт: {fetchedData.data.worksContent}</p>
            </div>
          )}

          {error && (
            <h2 className="mb-2 text-xl font-medium">Помилка: {error}</h2>
          )}
        </div>
      )}
    </div>
  );
};
