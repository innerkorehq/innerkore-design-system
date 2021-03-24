import React from "react";
import {EmailMessageForm} from '../components/EmailMessageForm';
import { action } from '@storybook/addon-actions';
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "EmailMessageForm",
  decorators: [withKnobs]
};

export const primary = () => {
  return (
    <EmailMessageForm onClick={action('clicked')}/>
  )
};