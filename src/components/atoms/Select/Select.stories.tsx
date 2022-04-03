import React from 'react';
import Select from './Select';

export default {
  component: Select,
  title: 'Components/Atoms/Select',
  argTypes: { onChange: { action: 'on change' } },
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
  ],
  defaultValue: 1,
};
