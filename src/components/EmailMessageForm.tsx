import React, { FC } from "react";
import { InputField } from "./InputField";
import {TextArea} from "./TextArea";
import { SaveButton } from "./SaveButton";

type EmailMessageFormTypes = {
  onClick(): void;
};


const emailhelp = 'mt-2 text-back_ground text-sm';
const textarealabel ='mt-5';
const Buttondiv= 'mt-5'


export const EmailMessageForm: FC<EmailMessageFormTypes> = ({ onClick }) => {
  return (
    <div>
      <div>
        <label>Email Address</label>
        <InputField placeholder="name@example.com" outlined={false} />
        <div id="emailHelp" className={emailhelp}>We'll never share your email with anyone else.</div>
      </div>
     <div  className={textarealabel}>
         <label>Your message</label>
        <TextArea/>
     </div>
      <div className={Buttondiv}>
      <SaveButton label="Submit" outlined={false} onClick={onClick} />
      </div>
    </div>
  );
};
