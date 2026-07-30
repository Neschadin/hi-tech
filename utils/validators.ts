export const phoneNumberCleaner = (phoneNumber: string) => {
  return phoneNumber.replace(/^(\+38|38)/, "").replace(/\D/g, "");
};

export const formatPhoneNumber = (phoneNumber: string) => {
  const cleaned = phoneNumberCleaner(phoneNumber);
  return cleaned.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4");
};

export const isValidPhoneNumber = (phoneNumber: string) => {
  const cleaned = phoneNumberCleaner(phoneNumber);
  return /^0\d{9}$/.test(cleaned);
};

export const isValidActNumber = (actNumber: string) => {
  return /^НФНФ-\d{6}$/.test(actNumber);
};
