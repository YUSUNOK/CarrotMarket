import Link from 'next/link';
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
export default function message() {
    const router = useRouter();
    const [phoneValue, setPhoneValue] = useState<string>("");
    const [auth, setAuth] = useState<string>("");
    const [authErrorHidden, setAuthErrorHidden] = useState<boolean>(true);

    useEffect(() => {
        const { phonenumber } = router.query;
        if (phonenumber) setPhoneValue(phonenumber as string);
    }, [router.query])

    const disabledRepeat = phoneValue.length !== 11;
    const disabledAuth = auth.length === 0;

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>, index: number) => {
        if (index === 1 && evt.target.value.length <= 11) { setPhoneValue(evt.target.value) };
        if (index === 2) { setAuth(evt.target.value); }
    }
    const handleAuthClick = () => {
        console.log(auth);
        if (auth === "sunok loves wonseob") {
            router.push('/main')
        }
        else {
            setAuthErrorHidden(false);
            setTimeout(() => setAuthErrorHidden(true), 4000);
        }
    }
    return (
        <div className="bg-neutral-800 h-screen w-screen flex flex-col justify-between">
            <div>
                <div className="border-solid border-b-2 border-[#A9A9A9] py-3 px-3 text-2xl text-[#C0C0C0] font-bold">
                    <Link href="/">&lt;</Link>
                </div>

                <div className='m-3'>
                    <div className="text-white mt-4">
                        <h1 className="font-bold text-3xl">휴대폰 번호를 인증해주세요.</h1>
                        <p className="mt-4 font-normal text-lg">당근마켓은 휴대폰 번호로 기입하세요. 번호는 <span className="font-bold">안전하게 보관</span>되며 어디에도 공개되지 않아요.</p>
                    </div>

                    <div className='flex flex-col'>
                        <input type="text"
                            placeholder={phoneValue}
                            value={phoneValue}
                            onChange={(evt) => { handleChange(evt, 1) }}
                            className='px-3 text-xl my-4 bg-transparent border-solid border-2 border-[#C0C0C0] py-2 text-[#C0C0C0] rounded-lg' />

                        <button disabled={disabledRepeat}
                            className={`rounded-lg border-solid border-2 py-3 text-2xl 
                            ${!disabledRepeat ? `border-[#C0C0C0] text-[#C0C0C0] font-bold` : `border-slate-600 text-slate-600`}`}>
                            인증문자 다시 받기</button>
                        <input type="text" placeholder="인증번호를 입력해주세요"
                            value={auth} onChange={(evt) => { handleChange(evt, 2) }}
                            className="rounded-lg px-3 text-xl my-4 bg-transparent border-solid border-2 border-[#C0C0C0] py-2 text-[#C0C0C0]" />
                        <p className="font-normal text-lg text-[#C0C0C0]">어떤 경우에도 타인에게 공유하지 마세요!</p>
                        <button disabled={disabledAuth}
                            onClick={handleAuthClick}
                            className={`py-3 mt-2 rounded-lg py-2 text-2xl text-[#C0C0C0] font-bold 
                            ${!disabledAuth ? `bg-[#ff6f0f]` : ` bg-slate-600`}`}>인증번호 확인</button>
                    </div>
                </div>
            </div>
            <div hidden={authErrorHidden} className="p-10 bg-[#C0C0C0] text-lg rounded-lg">
                전화번호가 잘못되었어요. 다시 한번 확인해주세요.
            </div>
        </div>
    )
}

