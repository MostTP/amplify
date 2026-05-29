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
  try {
    await loadPaystack();

    if (!window.PaystackPop) {
      alert("Paystack failed to initialize");
      return;
    }

    // ✅ FIXED PRICING LOGIC
    const INHOUSE_FEE = 5000;
    const OUTSIDER_FEE = 3000;
    const CERTIFICATE_FEE = 1000;

    const baseFee =
      data.attendanceType === "inhouse"
        ? INHOUSE_FEE
        : OUTSIDER_FEE;

    const amount = (baseFee + CERTIFICATE_FEE) * 100;

    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_KEY,
      email: data.email,
      amount,

      callback: (response: PaystackResponse) => {
        onSuccess(response.reference);
      },

      onClose: () => {
        alert("Payment cancelled");
      },
    });

    handler.openIframe();
  } catch (err) {
    console.error(err);
    alert("Payment failed to load");
  }
}