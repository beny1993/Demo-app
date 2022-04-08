import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import Link from 'next/link'

const { Header } = Layout;

export default function AdminHeader() {
  return (
    <Header className="bg-transparent	 flex">
      <div className="flex-1 text-white text-left">
        <Link
          href={"/"}
        >
          <a className='mx-10'>General</a>
        </Link>
        <Link
          href={"/product"}
        >
          <a>Products</a>
        </Link>
      </div>
    </Header>
  );
}
