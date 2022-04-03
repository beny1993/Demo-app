import React from 'react';

import { AdminFooter, AdminHeader } from '@/components/templates';
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';

interface Props {
  children: HTMLElement;
}

export const MainLayout = ({ children }: Props) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Layout className="site-layout">
      <AdminHeader />
      <Content style={{ margin: '0 16px' }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          {children}
        </div>
      </Content>
      <AdminFooter />
    </Layout>
  </Layout>
);


export default MainLayout;
