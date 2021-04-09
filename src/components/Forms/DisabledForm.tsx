import React, { FC } from "react";
import { InputField } from "../Inputs/InputField";
import { CheckBox } from "../Buttons/CheckBox";
import { SaveButton } from "../Buttons/SaveButton";
import { Label } from "../Labels/Label";

type DisabledFormTypes = {
  /**
   * Button click action
   */
  onClick(): void;
  /**
   * appending className to allow user to add extra css
   */
  className: string;
};

const emailhelp = "mt-2 text-back_ground text-sm";
const Passwordlabel = "mt-5";
const passwordMessage = "mt-2 text-back_ground text-sm";
const checkdiv = "mt-4";
const Buttondiv = "mt-5";

export const DisabledForm: FC<DisabledFormTypes> = ({ onClick, className }) => {
  return (
    <div>
      <fieldset disabled>
        <div>
          <Label className="" text="Disabled Input" />
          <InputField
            type="email"
            className=""
            placeholder=""
            outlined={false}
          />
          <div id="emailHelp" className={emailhelp}>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className={Passwordlabel}>
          <label>Password</label>
          <InputField
            type="password"
            className=""
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
      </fieldset>
    </div>
  );
};
