import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CheckoutForm = ({ cartItems }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (e) => {
    e.preventDefault();

    const { error, paymentIntent } = await stripe.confirmCardPayment('YOUR_CLIENT_SECRET', {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: { name: 'Customer Name' },
      },
    });

    if (error) {
      console.error(error);
    } else {
      console.log('Payment Success!', paymentIntent);
      alert('Order Confirmed!');
    }
  };

  return (
    <form onSubmit={handlePayment}>
      <CardElement />
      <button type="submit" disabled={!stripe}>Pay</button>
    </form>
  );
};

export default CheckoutForm;
