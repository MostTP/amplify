import { RegisterData } from "./formtypes";

interface PaystackResponse {
  reference: string;
  status: string;
  message: string;
}

interface PaystackHandler {
  openIframe: () => void;
}

interface PaystackOptions {
  key: string | undefined;
  email: string;
  amount: number;
  callback: (response: PaystackResponse) => void;
  onClose: () => void;
}

interface PaystackPop {
  setup: (options: PaystackOptions) => PaystackHandler;
}

declare global {
  interface Window {
    PaystackPop?: PaystackPop;
  }
}

function loadPaystack(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.PaystackPop) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;

    script.onload = () => resolve();
    script.onerror = () =>
      reject(new Error("Failed to load Paystack"));

    document.body.appendChild(script);
  });
}

export async function payWithPaystack(
  data: RegisterData,
  onSuccess: (reference: string) => void
) {
  // Temporarily suspend inline Paystack payment flow.
  // Show bank transfer details and ask users to send proof of payment.
  try {
    // ✅ FIXED PRICING LOGIC (client-side display only)
    const INHOUSE_FEE = 5000;
    const OUTSIDER_FEE = 3000;
    const CERTIFICATE_FEE = 1000;

    const baseFee =
      data.attendanceType === "inhouse"
        ? INHOUSE_FEE
        : OUTSIDER_FEE;

    const total = baseFee + (data.certificateRequired ? CERTIFICATE_FEE : 0);

    const accountNumber = "8056366057";
    const bankName = "OPAY";
    const accountName = "OLASUNKANMI STEPHEN";
    const proofNumber = "08056366057";

    // Copy account number to clipboard for convenience (best-effort)
    try {
      await navigator.clipboard.writeText(accountNumber);
    } catch {}

    const message = `Online payments are temporarily suspended.\n\nPlease pay via bank transfer:\nAccount: ${accountNumber}\nBank: ${bankName}\nAccount name: ${accountName}\n\nAmount: ₦${total.toLocaleString()}\n\nPlease send a proof of payment to ${proofNumber}`;

    alert(message);

    // Do not attempt to call Paystack until fixed. Let the caller handle next steps.
    return;
  } catch (err) {
    console.error("Offline payment fallback error:", err);
    alert("Unable to show offline payment instructions");
    return;
  }
}