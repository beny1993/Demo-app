import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

const { Header } = Layout;

export default function AdminHeader() {
  return (
    <Header className="bg-gray-50 flex">
      <div className="flex-1 text-white text-left">
        <span className="mx-1 rounded bg-white shadow">
          <a
            className="ant-dropdown-link text-blue-dark font-bold"
            onClick={(e) => e.preventDefault()}
          >
            hello
          </a>
        </span>
      </div>
    </Header>
  );
}
