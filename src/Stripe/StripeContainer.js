import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_live_51N9OEvEx7fNIWM08uOTK9Bjv0HZYcSvjUZRbjmooCDXxudWS5bneUfkTkuhgPJA0RfObGEieikcJVRb0vKo1Kvdx00d08eNiXX";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;