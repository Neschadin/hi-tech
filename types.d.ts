export type TData = {
  status: boolean;
  message: string;
  data: {
    actNumber: string;
    dateOfService: string;
    dateOfIssue: string;
    customer: string;
    phoneNumber: string;
    nomenclature: string;
    serialNumber: string;
    additionalInfo: string;
    cost: number;
    status: string;
    repairCompleteDate?: string;
    repairResult: boolean;
    worksContent: string;
  };
};

export type TFormState = {
  fetchedData: TData;
  actNumber: string;
  phoneNumber: string;
  actNumberValid: boolean;
  phoneNumberValid: boolean;
  loading: boolean;
  error: any;
};

export type Action =
  | { type: "RESET_FORM" }
  | { type: "CHANGE_ACT_NUMBER"; payload: string }
  | { type: "CHANGE_PHONE_NUMBER"; payload: string }
  | { type: "SET_ACT_NUMBER_VALID"; payload: boolean }
  | { type: "SET_PHONE_NUMBER_VALID"; payload: boolean }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_FETCHED_DATA"; payload: TData }
  | { type: "SET_ERROR"; payload: string };
