"use client";

import { ModalWindow } from "@/components/ModalWindow";
import { Container } from "@/components/atomic/Container";
import { useStatusForm } from "@/hooks/useStatusForm";
import { didactGothic } from "@/utils/fontDidactGothic";

export default function StatusPage() {
  const { state, handleResetForm, handleChange, handleBlur, handleSubmit } =
    useStatusForm();

  const {
    actNumber,
    phoneNumber,
    actNumberValid,
    phoneNumberValid,
    loading,
    error
  } = state;

  const inputClass = (valid: boolean) =>
    `w-full min-h-11 rounded-xl border px-4 py-3 text-center text-base focus:outline-none focus:ring-2 focus:ring-primary ${
      valid ? "border-divider-light" : "border-red-500"
    }`;

  return (
    <>
      <section className="bg-light-bg pb-16 pt-8 md:pb-24">
        <Container className="flex-col items-center gap-8">
          <div className="max-w-xl text-center">
            <h1 className={`${didactGothic} text-3xl md:text-4xl`}>
              Статус ремонту
            </h1>
            <p className="mt-4 text-lg text-text-on-white">
              Введіть номер акту та мобільний телефон, який ви вказували при
              здачі пристрою в сервіс.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg rounded-2xl border border-divider-light bg-white p-6 shadow-sm md:p-8"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 text-left">
                <label
                  htmlFor="actNumber"
                  className="text-sm font-semibold text-neutral-dark"
                >
                  Номер акту
                </label>
                <input
                  required
                  type="text"
                  id="actNumber"
                  name="actNumber"
                  placeholder="НФНФ-000000"
                  value={actNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={11}
                  autoComplete="off"
                  className={inputClass(actNumberValid)}
                />
                {!actNumberValid ? (
                  <span className="text-sm text-red-600">
                    Перевірте формат номера акту.
                  </span>
                ) : null}
              </div>

              <div className="flex flex-col gap-2 text-left">
                <label
                  htmlFor="phoneNumber"
                  className="text-sm font-semibold text-neutral-dark"
                >
                  Мобільний номер
                </label>
                <input
                  required
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="093 000 00 00"
                  value={phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={13}
                  autoComplete="tel"
                  className={inputClass(phoneNumberValid)}
                />
                {!phoneNumberValid ? (
                  <span className="text-sm text-red-600">
                    Перевірте формат номера телефону.
                  </span>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary text-base font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Завантаження…" : "Перевірити статус"}
              </button>
            </div>
          </form>
        </Container>
      </section>

      {(state.fetchedData || loading || error) && (
        <ModalWindow state={state} handleResetForm={handleResetForm} />
      )}
    </>
  );
}
