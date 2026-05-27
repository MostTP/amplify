import { RegisterData } from "./formtypes";

interface PaystackResponse {
  reference: string;
  status: string;
  message: string;
}

function loadPaystack(): Promise<void> {
  return new Promise((resolve, reject) => {
    if ((window as any).PaystackPop) return resolve();

    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;

    script.onload = () => resolve();
    script.onerror = () => reject("Failed to load Paystack");

    document.body.appendChild(script);
  });
}

export async function payWithPaystack(
  data: RegisterData,
  onSuccess: (reference: string) => void
) {
  try {
    await loadPaystack();

    if (!(window as any).PaystackPop) {
      alert("Paystack failed to initialize");
      return;
    }
    const amount =
    5000 + (data.wantsCertificate ? 1000 : 0);

    const handler = (window as any).PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_KEY,
      email: data.email,
      amount: amount * 100,

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