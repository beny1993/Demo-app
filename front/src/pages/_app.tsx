/* eslint-disable react/jsx-props-no-spreading,react/prop-types */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ConfigProvider } from 'antd';
import ProgressBar from '@badrap/bar-of-progress';
import { Provider as TribeProvider } from '@tribeplatform/react-sdk'
import 'antd/dist/antd.css';
import '../styles/globals.css';
import '../styles/index.css';
import '../styles/antd-override.css';
import LayoutWrapper from '../layouts/layoutWrapper';

const progress = new ProgressBar({
  size: 4,
  color: '#38a169',
  className: 'bar-of-progress',
  delay: 100,
});

export default function App(ctx) {
  const { Component, pageProps } = ctx;
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', progress.start);
    router.events.on('routeChangeComplete', progress.finish);
    router.events.on('routeChangeError', progress.finish);

    return () => {
      router.events.off('routeChangeStart', progress.start);
      router.events.off('routeChangeComplete', progress.finish);
      router.events.off('routeChangeError', progress.finish);
    };
  }, [router]);
  
  return (
      <ConfigProvider direction={'ltr'}>
        <TribeProvider
            config={{
              accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdUOEo0VjBFd0EiLCJleHRlcm5hbEFjdG9ySWQiOiJBUFA6OjZvV2h6YjFsbEhlTyIsIm5ldHdvcmtJZCI6ImhhUDREWHdrTm8iLCJ0b2tlblR5cGUiOiJMSU1JVEVEIiwiZW50aXR5SWQiOiJoYVA0RFh3a05vIiwicGVybWlzc2lvbkNvbnRleHQiOiJORVRXT1JLIiwicGVybWlzc2lvbnMiOlsiKiJdLCJpYXQiOjE2NDkwOTMxMDMsImV4cCI6MTY1MTY4NTEwM30.ebnPKxS3KYUqaL8BSv7DgnAgdBBy-D4tNokJyZRoEDw',
              baseUrl: 'https://app.tribe.so/graphql',
            }}
          >
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
        </TribeProvider>
      </ConfigProvider>
  );
}
