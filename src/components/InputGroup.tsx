import React, { FC } from "react";
import { InputField } from "./InputField";
import { Label } from "./Label";
import { TextArea } from "./TextArea";

type InputGroupTypes = {
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean;
  placeholder:string
};

const inputdiv ='flex inline mt-3 my-2'
const span ="flex mt-1 p-2 border bg-on-secondary text-surface rounded"
const BASE_Input = "focus:outline-none focus:shadow-outline w-full p-2 border border-on-secondary rounded mt-1";
const CONTAINED_INPUT = `${BASE_Input} border text-on-secondary`;
const OUTLINED_INPUT = `${BASE_Input} border text-on-secondary`;

export const InputGroup: FC<InputGroupTypes> = ({ outlined,placeholder }) => {
  return (
    <div>
        <div className={inputdiv}>
        <span className={span}>@</span>
        <InputField placeholder="Username"/>
        </div>
        <div className={inputdiv}>
        <InputField placeholder=" Recipient's Username"/>
        <span className={span}>@example.com</span>
        </div>
        <div>
        <Label text="Your vanity URL"/>
        </div>
        <div className={inputdiv}>
        <span className={span}>https://example.com/users/</span>
        <InputField placeholder=""/>
        </div>
        <div className={inputdiv}>
        <span className={span}>$</span>
        <InputField placeholder=""/>
        <span className={span}>.00</span>
        </div>
        <div className={inputdiv}>
        <InputField placeholder="Username"/>
        <span className={span}>@</span>
        <InputField placeholder="server"/>
        </div>
    </div>
  );
};
