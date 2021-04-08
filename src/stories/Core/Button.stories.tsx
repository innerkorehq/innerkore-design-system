import React from 'react';
import { Button, ButtonTypes } from '../../components/Core/Button';
import Arrow from '../../../public/img/arrow.svg';
import Dropdown from '../../../public/img/dropdown.svg';



export default {
  title: 'Core/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
  },
};

export const MediumNormal = (args: ButtonTypes) => {
  return <Button {...args} />;
};

MediumNormal.args = {
  label: 'MediumNormal',
  style: 'normal',
  size: 'medium',
  onClick: function () {
    alert('Button clicked');
  },
  icon: Arrow,
  // href: 'https//google.com'
};

export const SmallNormal = (args: ButtonTypes) => {
  return <Button {...args} />;
};

SmallNormal.args = {
  label: 'SmallNormal',
  style: 'normal',
  size: 'small',
  href: 'https://google.com',
  className: 'inline-block',
  icon: Dropdown
};

export const LargeNormal = (args: ButtonTypes) => {
  return <Button {...args} />;
};

LargeNormal.args = {
  label: 'LargeNormal',
  style: 'normal',
  size: 'large',
  href: 'https://google.com',
  className: 'inline-block',
  icon: Arrow,
  align:'left'
};
