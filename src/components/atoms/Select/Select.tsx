import React from 'react';
import { Select as SelectAnt } from 'antd';

export default function Select(props: any) {
  const { children, ...restProps } = props;
  return <SelectAnt {...restProps}>{children}</SelectAnt>;
}
