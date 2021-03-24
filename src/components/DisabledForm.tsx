import React, { FC } from "react";
import { InputField } from "./InputField";
import { CheckBox } from "./CheckBox";
import { SaveButton } from "./SaveButton";

type DisabledFormTypes = {
//   outlined?: boolean;
//   label: string;
  onClick(): void;
};


const emailhelp = 'mt-2 text-back_ground text-sm';
const Passwordlabel ='mt-5';
const passwordMessage ='mt-2 text-back_ground text-sm';
const checkdiv ='mt-4';
const Buttondiv= 'mt-5'


export const DisabledForm: FC<DisabledFormTypes> = ({ onClick }) => {
  return (
    <div>
        <fieldset disabled>
      <div>
        <label>Email Address</label>
        <InputField placeholder="" outlined={false} />
        <div id="emailHelp" className={emailhelp}>We'll never share your email with anyone else.</div>
      </div>
      <div className={Passwordlabel}>
        <label>Password</label>
        <InputField placeholder="" outlined={false} />
        <div className={passwordMessage}>
           Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji. 
        </div> 
      </div>
      <div className={checkdiv}>
        <CheckBox label="Check me out" />
      </div>
      <div className={Buttondiv}>
      <SaveButton label="Submit" outlined={false} onClick={onClick} />
      </div>
      </fieldset>
    </div>
  );
};
