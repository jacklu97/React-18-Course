import { useEffect } from 'react'
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import { getTokenDuration } from '../util/auth'

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData()
  const submit = useSubmit()
  
  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'EXPIRED') {
      submit(null, {action: '/logout', method: 'POST'});
      return;
    }

    const tokenDuration = getTokenDuration()

    setTimeout(() => {
      submit(null, {action: '/logout', method: 'POST'});
    }, tokenDuration)
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
