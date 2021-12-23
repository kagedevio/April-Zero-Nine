import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51K9iBGFSeND4xuWjJmCJJEWiGJbAQtgnT7MhGbmvsBLeKY8ifbPOnm7d4nYW1cMOBSbKpqFC7HIBhSJelYxwjuOf00PvADvtrV';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='April Zero Nine'
      billingAddress
      shippingAddress
      image='https://img2.cgtrader.com/items/2427422/da2c0b2165/large/konoha-band-from-naruto-shippuden-fan-art-for-cosplay-3d-model-stl.jpg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
