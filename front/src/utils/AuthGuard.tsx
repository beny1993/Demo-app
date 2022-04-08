import React, { useEffect } from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';
import { getCookie } from '@/../front/src/utils/cookie';

const authGuard = (Component = null, layout = null) => {
  const AuthGuard = () => {
    useEffect(() => {
      (async function fn() {
        if (!getCookie('accessToken')) {
          await Router.push('/login');
        }
      })();
    }, []);

    return <Component />;
  };

  AuthGuard.getInitialProps = async (ctx) => {
    const { accessToken } = nextCookie(ctx);
    if (!accessToken) {
      ctx.res?.writeHead(301, { Location: '/login' });
      ctx.res?.end();
    }
    return { layout };
  };

  return AuthGuard;
};

export default authGuard;
