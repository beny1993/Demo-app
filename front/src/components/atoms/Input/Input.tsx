import React from 'react';
import { Input as AntInput } from 'antd';

export default function Input(props: any) {
  const { className } = props;
  return <AntInput {...props} className={`${className} h-12`} />;
}
