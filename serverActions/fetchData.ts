"use server";

type TReqData = {
  actNumber: string;
  phoneNumber: string;
};

export async function getRepairStatus(reqData: TReqData) {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "text/plain",
        Authorization:
          "Basic " + btoa(process.env.ONEC_USER + ":" + process.env.ONEC_PASS),
        "Content-Type": "text/plain",
      },
      body: JSON.stringify(reqData),
      redirect: "follow" as const,
      credentials: "include" as const, // Add this line
      cache: "no-store" as const,
    };

    const res = await fetch(process.env.ONEC_URL!, requestOptions);

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
