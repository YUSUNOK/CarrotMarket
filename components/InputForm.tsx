import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';

interface IInputFormProps {
    placeholderText: string,
    buttonText: string,
    questionText: string
}

const MyButton = (props: React.PropsWithChildren<{ disabled?: boolean; onClick?: React.MouseEventHandler<HTMLButtonElement> }>) => {
    return (
        <button disabled={props.disabled}
            className={`rounded-lg border-solid border-2 py-2 text-2xl ${!props.disabled ? `border-[#C0C0C0] text-[#C0C0C0] font-bold` : `border-slate-600 text-slate-600`}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default function InputForm(props: IInputFormProps) {
    const [phoneValue, setPhoneValue] = useState<string>("");
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        if (!(evt.target.value.length > 11)) {
            setPhoneValue(evt.target.value);
        }
    }

    const buttonDisabled = phoneValue.length !== 11;
    const handleButtonClick = () => {
        if (buttonDisabled) {
            return;
        }
        Router.push({
            pathname : '/authmessage/[phonenumber]',
            query : {phonenumber : phoneValue}
        })
    }

    return (
        <div className='flex flex-col'>
            <input type="text"
                placeholder={props.placeholderText}
                onChange={handleChange}
                value={phoneValue}
                className="px-3 text-xl my-4 bg-transparent border-solid border-2 border-[#C0C0C0] py-2 text-[#C0C0C0] rounded-lg"
            />
            <MyButton
                disabled={buttonDisabled}
                onClick={handleButtonClick}
            >
                {props.buttonText}
            </MyButton>
            <p className='mt-3 text-[#C0C0C0] text-center text-xl'>{props.questionText}</p>
        </div>
    )
}