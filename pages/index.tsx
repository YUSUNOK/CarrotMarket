import Image from "next/image"
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-neutral-800 h-screen w-screen flex flex-col justify-around items-center text-center">
      <div className="flex justify-center flex-col items-center">
        <Image src="/image/Logo.png" alt="로고" width="200" height="200" />
        <div className="text-white text-center mt-4">
          <h1 className="font-bold text-3xl">당신 근처의 당근마켓</h1>
          <p className="mt-4 font-normal text-lg">내 동네를 설정하고</p>
          <p className="font-normal text-lg">당근마켓을 시작해보세요.</p>
        </div>

      </div>
      <div className="flex justify-center flex-col w-screen">
        <button className="bg-[#ff6f0f] text-white flex py-3 mx-3 justify-center rounded font-bold" >
          시작하기
        </button>
        <p className="mt-4 text-[#C0C0C0] text-lg">이미 계정이 있나요? <Link href="/phoneAuthentication"><span className="text-[#ff6f0f] font-bold text-lg">로그인</span></Link></p>
      </div>
    </div>
  )
}
