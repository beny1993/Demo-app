import React from 'react';
import { Form } from 'antd';
import { Input, Button } from '@/components/atoms';

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
};

interface Props {
  onFinish?: (values: any) => Promise<void>;
  loading?: boolean;
}

const LoginForm = ({ onFinish, loading }: Props) => (
  <div className="bg-white rounded-md tracking-wide mb-3 relative">
    <div className="text-xl align-right font-bold mb-5 text-right">ورود</div>
    <Form
      layout="vertical"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <div className="flex flex-col w-full">
        <div className="flex-col">
          <div className="w-full flex flex-col">
            <Form.Item
              label="ایمیل"
              name="username"
              className="flex-1"
              rules={[
                { required: true, message: 'وارد کردن ایمیل ضروری است' },
                {
                  type: 'email',
                  message: 'ایمیل وارد شده معتبر نیست',
                },
              ]}
            >
              <Input placeholder="example@domain.com" className="rounded-md" />
            </Form.Item>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="w-full flex flex-col">
            <Form.Item
              name="password"
              label="رمز عبور"
              className="flex-1"
              rules={[{ required: true, message: 'وارد کردن ایمیل ضروری است' }]}
            >
              <Input placeholder="رمز عبور" type="password" />
            </Form.Item>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <Button
            loading={loading}
            className="text-white h-10 font-bold bg-blue text-md mt-2"
            htmlType="submit"
          >
            ورود
          </Button>
        </div>
      </div>
    </Form>
  </div>
);

export default LoginForm;
