"use client";

import { ModalWindow } from "@/components/ModalWindow";
import { Container } from "@/components/atomic";
import { useStatusForm } from "@/hooks/useStatusForm";

export default function Status() {
  const { state, handleResetForm, handleChange, handleBlur, handleSubmit } =
    useStatusForm();

  const {
    fetchedData,
    actNumber,
    phoneNumber,
    actNumberValid,
    phoneNumberValid,
    loading,
    error,
  } = state;

  return (
    <>
      <Container className="h-96">
        <form onSubmit={handleSubmit} className="mx-auto max-w-lg p-4">
          <div className="mb-4">
            <label htmlFor="actNumber" className="mb-1 block font-medium">
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
              className={`w-full rounded border px-3 py-2 text-center focus:border-blue-500 focus:outline-none ${
                !actNumberValid ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNumber" className="mb-1 block font-medium">
              Мобільний номер
            </label>
            <input
              required
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="093 000 00 00"
              value={phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              maxLength={13}
              className={`w-full rounded border px-3 py-2 text-center focus:border-blue-500 focus:outline-none ${
                !phoneNumberValid ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>

          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </Container>

      {(fetchedData || loading || error) && (
        <ModalWindow state={state} handleResetForm={handleResetForm} />
      )}
    </>
  );
}
