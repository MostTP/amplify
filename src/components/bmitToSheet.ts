import { RegisterData } from "./formtypes";

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL!;

export async function submitToSheet(
  data: RegisterData,
  reference: string,
  amountPaid: number
) {
  const paymentType =
    data.attendanceType === "inhouse"
      ? "In-House Participant"
      : "Guest Participant";

  const payload = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    department: data.department,
    church: data.church,
    notes: data.notes,
    attendanceType: data.attendanceType,

    paymentType,
    amountPaid,
    paymentStatus: "PAID",
    reference,

    submittedAt: new Date().toISOString(),
  };

  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to submit registration to Google Sheets");
  }

  return await response.json();
}