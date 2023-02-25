
import Link from 'next/link';
import InputForm from '@/components/InputForm';

export default function AuthenticationPage() {
    return (
        <div className="bg-neutral-800 h-screen w-screen">
            <div className="border-solid border-b-2 border-[#A9A9A9] py-3 px-3 text-2xl text-[#C0C0C0] font-bold">
                <Link href="/">&lt;</Link>
            </div>
            <div className='m-3'>
                <div className="text-white mt-4">
                    <h1 className="font-bold text-3xl">휴대폰 번호를 인증해주세요.</h1>
                    <p className="mt-4 font-normal text-lg">당근마켓은 휴대폰 번호로 기입하세요. 번호는 <span className="font-bold">안전하게 보관</span>되며 어디에도 공개되지 않아요.</p>
                </div>
                <InputForm placeholderText="휴대폰 번호를 입력해주세요." buttonText="인증문자 받기" questionText="휴대폰 번호가 변경되었나요? 이메일로 계정찾기" />
            </div>


        </div>
    );
}