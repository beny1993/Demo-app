import React from 'react';
import Checkbox from './Checkbox';

export default {
  component: Checkbox,
  title: 'Components/Atoms/Checkbox',
  argTypes: { onChange: { action: 'on change' } },
};

const Template = (args) => (
  <div>
    <div className="mb-4 p-2 border rounded bg-info text-info-text">
      Extend of Ant Design Input and Support all ant design input props{' '}
      <a className="text-base font-bold text-blue" href="https://ant.design/components/button/">
        Ant Design Button Document
      </a>
    </div>
    <Checkbox {...args}>option 1</Checkbox>
    <Checkbox {...args}>option 2</Checkbox>
    <Checkbox {...args}>option 3</Checkbox>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
  ],
  defaultValue: 1,
};
