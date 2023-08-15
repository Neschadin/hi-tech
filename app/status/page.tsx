"use client";

import { ModalWindow } from "@/components/ModalWindow";
import { Container, LightCircle } from "@/components/atomic";
import { useStatusForm } from "@/hooks/useStatusForm";
import { getRepairStatus } from "@/serverActions/fetchData";
import { TData } from "@/types";
import { FocusEvent, FormEvent, MouseEvent, useEffect, useState } from "react";

type TFormData = {
  actNumber: string;
  phoneNumber: string;
};

// const phoneNumberCleaner = (phoneNumber: string) => {
//   return phoneNumber.replace(/^(\+38|38)/, "").replace(/\D/g, "");
// };

// const formatPhoneNumber = (phoneNumber: string) => {
//   const cleaned = phoneNumberCleaner(phoneNumber);
//   return cleaned.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4");
// };

// function isValidPhoneNumber(phoneNumber: string) {
//   const cleaned = phoneNumberCleaner(phoneNumber);

//   return ["[679]3", "6[78]", "9[678]", "50", "66", "39"].some((item) => {
//     const reg = new RegExp("0" + item + "\\d{7}$");
//     return reg.test(cleaned);
//   });
// }

// function isValidActNumber(actNumber: string) {
//   return /^НФНФ-\d{6}$/.test(actNumber);
// }

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

  // const [fetchedData, setFetchedData] = useState(null);
  // const [actNumber, setActNumber] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [actNumberValid, setActNumberValid] = useState(true);
  // const [phoneNumberValid, setPhoneNumberValid] = useState(true);

  // const handleResetForm = () => {
  //   setFetchedData(null);
  //   setActNumber("");
  //   setPhoneNumber("");
  //   setActNumberValid(true);
  //   setPhoneNumberValid(true);
  // };

  // const handleChange = (e: any) => {
  //   const { name, value } = e.target;

  //   if (name === "actNumber") {
  //     const newActNumber = value.startsWith("НФНФ-") ? value : `НФНФ-${value}`;
  //     setActNumber(newActNumber);
  //   } else {
  //     setPhoneNumber(formatPhoneNumber(value));
  //   }
  // };

  // const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
  //   if (e.target.name === "actNumber") {
  //     actNumber && setActNumberValid(isValidActNumber(actNumber));
  //   } else {
  //     phoneNumber && setPhoneNumberValid(isValidPhoneNumber(phoneNumber));
  //   }
  // };

  // const handlerFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (!actNumber || !phoneNumber || !actNumberValid || !phoneNumberValid) {
  //     return;
  //   }

  //   const reqData = {
  //     actNumber,
  //     phoneNumber: phoneNumberCleaner(phoneNumber),
  //   };

  //   const res = await getRepairStatus(reqData);

  //   setFetchedData(res);
  // };

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
