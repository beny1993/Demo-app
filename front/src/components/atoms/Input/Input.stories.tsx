import React from 'react';

import Input from './Input';

export default {
  component: Input,
  title: 'Components/Atoms/Input',
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => (
  <div>
    <div className="mb-4 p-2 border rounded bg-info text-info-text">
      Extend of Ant Design Input and Support all ant design input props{' '}
      <a className="text-base font-bold text-blue" href="https://ant.design/components/input/">
        Ant Design Input Document
      </a>
    </div>
    <Input {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  value: 'Test',
  placeholder: 'Input',
  allowClear: false,
  size: 'middle',
};

export const ClearIcon = Template.bind({});
ClearIcon.args = {
  value: 'Test',
  placeholder: 'Input',
  allowClear: true,
};

export const maxLength = Template.bind({});
maxLength.args = {
  size: 'small',
  placeholder: 'Input',
  allowClear: true,
  maxLength: 5,
};
