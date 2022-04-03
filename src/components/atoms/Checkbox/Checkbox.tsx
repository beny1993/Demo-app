import React from 'react';
import { Checkbox as AntCheckbox } from 'antd';

export default function Checkbox(props: any) {
  const { children, ...restProps } = props;
  return <AntCheckbox {...restProps}>{children}</AntCheckbox>;
}
