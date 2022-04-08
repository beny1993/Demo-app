import React from 'react';
import { Button as AntButton } from 'antd';

interface Props {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  htmlType?: any;
  icon?: any;
  onClick?: any;
  loading?: boolean;
  type?: 'primary' | 'text' | 'link' | 'ghost' | 'default' | 'dashed';
}

export default function Button({
  children,
  className = 'h-12',
  disabled = false,
  htmlType,
  icon,
  onClick,
  type = 'primary',
  loading = false,
}: Props) {
  return (
    <AntButton
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`w-full px-4 rounded ${className}`}
      {...(htmlType ? { htmlType } : null)}
      {...(icon ? { icon } : null)}
      loading={loading}
    >
      {children}
    </AntButton>
  );
}
