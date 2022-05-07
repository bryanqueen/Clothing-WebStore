import React from 'react';

import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

import { useDispatch } from 'react-redux';

import CartActionTypes from '../../redux/cart/cart.types';

export default function PayOut() {
  const dispatch = useDispatch();

  const config = {
    public_key: 'FLWPUBK_TEST-db3d451721746e9066fa11dc1b01c28c-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phonenumber: '07064586146',
      name: 'joel ugwumadu',
    },
    customizations: {
      title: 'My store',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
      console.log(response);
      if (response.status === 'success') {
        dispatch({ type: CartActionTypes.CHECK_OUT_CLEAR_OUT });
      }
      closePaymentModal(); // this will close the modal programmatically
    },
      
    onClose: () => {},
  };

  return (
    <div className="App">
      {/* <h1>Hello Test user</h1> */}
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}
