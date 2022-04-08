import React from 'react';

import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { AdminHeader } from '../components/templates';

interface Props {
  children: HTMLElement;
}

export const MainLayout = ({ children }: Props) => (
  <Layout style={{ height: "100%" }}>
    <AdminHeader />
    <Content style={{ margin: '0 16px', height: '100%' }}>

      {children}
    </Content>
  </Layout>
);


export default MainLayout;
