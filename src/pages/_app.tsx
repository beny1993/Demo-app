/* eslint-disable react/jsx-props-no-spreading,react/prop-types */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ConfigProvider } from 'antd';
import ProgressBar from '@badrap/bar-of-progress';
import LayoutWrapper from '@/layouts/layoutWrapper';
import 'antd/dist/antd.css';
import '../styles/globals.css';
import '../styles/index.css';
import '../styles/antd-override.css';

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
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ConfigProvider>
  );
}
