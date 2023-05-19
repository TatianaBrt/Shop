import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51N9OEvEx7fNIWM08Dyj7D8oCMGWmF7yGsHYtEiMzlvysPIes6jIgJyrESVmzGkeAEdtjAJ7jumrZ3wpMHAOcvYhQ00LoMDvE6g";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;