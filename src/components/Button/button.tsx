import React, { FC } from 'react';
import { Button } from 'antd';
// import '../../scss/tailwind.scss';
// import '../../scss/index.scss';

// export type ButtonTypes = {
//   /**
//    * Label of the button
//    */
//   label: string;
//   /**
//    * Boolean value to define the button style
//    */
//   outlined?: boolean;
//   /**
//    * Button type
//    */
//   type: string;
//   /**
//    * Button click action
//    */
//   onClick(): void;
// };

// const BASE_BUTTON =
//   'rounded outline-none shadow py-3 px-12 font-normal uppercase tracking-wider text-lg';
// const CONTAINED_BUTTON = `${BASE_BUTTON} bg-teal-400 border border-teal-400 text-white`;
// const OUTLINED_BUTTON = `${BASE_BUTTON} border border-teal-400 text-teal-400`;

export const AppButton = () => {
  return (
    <Button type="primary" className="bg-green-500 border-0">
      Primary Button
    </Button>
  );
};

export default AppButton;
