import React from 'react';

import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

import CustomButton from '../custom-button/custom-button';

import { useDispatch } from 'react-redux';

// import { useNavigate } from 'react-router-dom';

import CartActionTypes from '../../redux/cart/cart.types';

export default function PayOut({ total }) {
  const dispatch = useDispatch();

  // const navigate = useNavigate

  const config = {
    public_key: 'FLWPUBK_TEST-db3d451721746e9066fa11dc1b01c28c-X',
    tx_ref: Date.now(),
    amount: total,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phonenumber: '07064586146',
      name: 'joel ugwumadu',
    },
    customizations: {
      title: 'Otk Clothing',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  //
  return (
    <div className="PayOut">
      <CustomButton
        price={total}
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              if (response.status === 'successful') {
                alert(response.status);
                dispatch({ type: CartActionTypes.CHECK_OUT_CLEAR_OUT });
              } else {
                console.log('Payment Error: ', Error);
                alert(
                  'There was an issu with your payment! Please make sure you use the provided credit card'
                );
              }
              closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Pay Now
      </CustomButton>
    </div>
  );
}
