import React from 'react';
import { Layout } from 'antd';
import { ProjectName } from '@/webConfig';

const { Footer } = Layout;

const AdminFooter = () => (
  <Footer style={{ textAlign: 'center' }}>
    Customer Panel ©2021 Created by {ProjectName}
  </Footer>
);

export default AdminFooter;
