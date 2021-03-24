import React from "react";
import {DisabledForm} from '../components/DisabledForm';
import { action } from '@storybook/addon-actions';
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "DisabledForm",
  decorators: [withKnobs]
};

export const primary = () => {
  return (
    <DisabledForm onClick={action('clicked')}/>
  )
};