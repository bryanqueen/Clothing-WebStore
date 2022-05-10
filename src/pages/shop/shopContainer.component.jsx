import React from 'react';
import { Outlet } from 'react-router-dom';

/**
 * It's a function that returns a fragment that contains an outlet.
 * @returns The Outlet component is being returned.
 */
export default function ShopPageContainer() {
  return (
    <>
      <Outlet />
    </>
  );
}
