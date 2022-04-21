import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

import ShopPage from './pages/shop/shop.component';

import CollectionsOverview from './components/collection-overview/collection-overview';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

import CheckoutPage from './pages/checkout/checkout';

import Header from './components/header/header.component';

import { auth, creatUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.action';

import ShopPageContainer from './pages/shop/shopContainer.component';
import { setItems } from './redux/shop/shop.action';
import SHOP_DATA from './redux/shop/shop.data';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, setItems } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await creatUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else setCurrentUser(null);
    });
    // console.log(SHOP_DATA);
    setItems(SHOP_DATA);
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPageContainer />}>
            <Route index element={<ShopPage category={'all'} />} />
            <Route path="hats" element={<ShopPage category={'Hats'} />} />
            <Route
              path="sneakers"
              element={<ShopPage category={'Sneakers'} />}
            />
            <Route path="jackets" element={<ShopPage category={'Jackets'} />} />
            <Route path="women" element={<ShopPage category={'Women'} />} />
            <Route path="men" element={<ShopPage category={'Men'} />} />
          </Route>
          <Route path="/collectionoverview" element={<CollectionsOverview />} />
          <Route exact path="/checkout" element={<CheckoutPage />} />
          <Route exact path="/signin" element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  setItems: (data) => dispatch(setItems(data)),
});

export default connect(null, mapDispatchToProps)(App);
