import { ReactNode, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
interface IInputFormProps {
    placeholderText: string,
    buttonText: string,
    questionText: string
}

const Button = (props: { buttonText: string, phoneLength: number }) => {
    const handleClick = () => {
        props.phoneLength === 11 ? Router.push('/main') : "";
    } 
    return (
        <button
            className={`rounded-lg border-solid border-2 py-2 text-2xl ${props.phoneLength === 11 ? `border-[#C0C0C0] text-[#C0C0C0] font-bold` : `border-slate-600 text-slate-600`}`} onClick={handleClick}>
            {props.buttonText}
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
    return (
        <div className='flex flex-col'>
            <input type="text"
                placeholder={props.placeholderText}
                onChange={handleChange}
                value={phoneValue}
                className="px-3 text-lg my-4 bg-transparent border-solid border-2 border-[#C0C0C0] py-2 text-[#C0C0C0] rounded-lg"
            />
            <Button buttonText={props.buttonText} phoneLength={phoneValue.length} />
            <p className='mt-3 text-[#C0C0C0] text-center'>{props.questionText}</p>
        </div>
    )
}