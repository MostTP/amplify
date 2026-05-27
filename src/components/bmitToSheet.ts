import { RegisterData } from "./formtypes";

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!;

export async function submitToSheet(
  data: RegisterData,
  reference: string
) {
  const payload = {
    ...data,
    paymentStatus: "PAID",
    reference,
  };

  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}