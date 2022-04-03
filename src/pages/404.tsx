import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Button } from '@/components/atoms';

const NotFound = () => {
  const name = '404';
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <div className="flex w-full justify-center p-6 flex-col items-center">
        <div className="mt-20 max-w-sm">
          <img className="w-60" src="/images/ic-404.svg" alt="404" />
        </div>
        <p className="text-4xl mt-16">Page not found</p>
        <p className="max-w-xs text-center mt-3 text-gray-400">
          صفحه مورد نظر یافت نشد، با کلیک بر روی لینک زیر به صفحه اصلی بازگردید.
        </p>
        <Link href="/">
          <div className="w-56">
            <Button
              type="primary"
              className="bg-blue h-12 mt-8"
              loading={loading}
              onClick={() => setLoading(true)}
            >
              صفحه اصلی
            </Button>
          </div>
        </Link>
      </div>
    </>
  );
};

NotFound.layout = 'simple';
export default NotFound;
