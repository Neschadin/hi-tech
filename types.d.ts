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