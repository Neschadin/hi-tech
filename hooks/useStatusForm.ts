"use client";

import { FocusEvent, SubmitEvent, useReducer } from "react";

import {
  isValidActNumber,
  isValidPhoneNumber,
  phoneNumberCleaner
} from "@/utils/validators";

import { TFormState } from "@/types";

const initialState = {
  fetchedData: null,
  actNumber: "",
  phoneNumber: "",
  actNumberValid: true,
  phoneNumberValid: true,
  loading: false,
  error: null
};

function reducer(state: TFormState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case "RESET_FORM":
      return initialState;

    case "CHANGE_ACT_NUMBER":
      const newActNumber = payload.startsWith("НФНФ-")
        ? payload
        : `НФНФ-${payload}`;
      return { ...state, actNumber: newActNumber };

    case "CHANGE_PHONE_NUMBER":
      return { ...state, phoneNumber: payload };

    case "SET_ACT_NUMBER_VALID":
      return { ...state, actNumberValid: payload };

    case "SET_PHONE_NUMBER_VALID":
      return { ...state, phoneNumberValid: payload };

    case "SET_LOADING":
      return { ...state, loading: payload };

    case "SET_FETCHED_DATA":
      return { ...state, fetchedData: payload };

    case "SET_ERROR":
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
}

export function useStatusForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleResetForm = () => {
    dispatch({ type: "RESET_FORM" });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name === "actNumber") {
      dispatch({ type: "CHANGE_ACT_NUMBER", payload: value });
    } else {
      dispatch({ type: "CHANGE_PHONE_NUMBER", payload: value });
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    if (e.target.name === "actNumber") {
      state.actNumber &&
        dispatch({
          type: "SET_ACT_NUMBER_VALID",
          payload: isValidActNumber(state.actNumber)
        });
    } else {
      state.phoneNumber &&
        dispatch({
          type: "SET_PHONE_NUMBER_VALID",
          payload: isValidPhoneNumber(state.phoneNumber)
        });
    }
  };

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    if (
      !state.actNumber ||
      !state.phoneNumber ||
      !state.actNumberValid ||
      !state.phoneNumberValid
    ) {
      return;
    }

    dispatch({ type: "SET_LOADING", payload: true });

    try {
      const reqData = {
        actNumber: state.actNumber,
        phoneNumber: phoneNumberCleaner(state.phoneNumber)
      };

      const statusApi =
        process.env.NEXT_PUBLIC_REPAIR_STATUS_API ?? "/api/repair-status";

      const response = await fetch(statusApi, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqData)
      });

      if (!response.ok) {
        dispatch({
          type: "SET_ERROR",
          payload: `Помилка сервера (${response.status})`
        });
        return;
      }

      const data = await response.json();

      if (!data?.status) {
        dispatch({ type: "SET_ERROR", payload: "Документ не знайдено" });
      } else {
        dispatch({ type: "SET_FETCHED_DATA", payload: data });
      }
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload:
          error instanceof Error ? error.message : "Непередбачувана помилка"
      });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  return {
    state,
    handleResetForm,
    handleChange,
    handleBlur,
    handleSubmit
  };
}
