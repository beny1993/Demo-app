import React from 'react';

import Button from './Buttton';

export default {
  component: Button,
  title: 'Button',
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Button {...args} >Button</Button>;

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  disabled: false,
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  disabled: false,
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  disabled: false,
};

export const Dashed = Template.bind({});
Dashed.args = {
  type: 'dashed',
  disabled: false,
};

export const Ghost = Template.bind({});
Ghost.args = {
  type: 'ghost',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'ghost',
  disabled: true,
};