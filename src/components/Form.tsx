import React, { FC } from "react";
import { InputField } from "./InputField";
import { CheckBox } from "./CheckBox";
import { SaveButton } from "./SaveButton";
import { Label } from "./Label";

type FormTypes = {
  //   outlined?: boolean;
  //   label: string;
  onClick(): void;
};

const emailhelp = "mt-2 text-back_ground text-sm";
const Passwordlabel = "mt-5";
const passwordMessage = "mt-2 text-back_ground text-sm";
const checkdiv = "mt-4";
const Buttondiv = "mt-5";

export const Form: FC<FormTypes> = ({ onClick }) => {
  return (
    <div>
      <div>
        <Label className="" text="Email Address" />
        <InputField
          className=""
          type="email"
          placeholder="info@example.com"
          outlined={false}
        />
        <div id="emailHelp" className={emailhelp}>
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className={Passwordlabel}>
        <Label text="Password" className="" />
        <InputField
          className=""
          type="password"
          placeholder=""
          outlined={false}
        />
        <div className={passwordMessage}>
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </div>
      </div>
      <div className={checkdiv}>
        <CheckBox className="" label="Check me out" />
      </div>
      <div className={Buttondiv}>
        <SaveButton
          className=""
          label="Submit"
          outlined={false}
          onClick={onClick}
        />
      </div>
    </div>
  );
};
