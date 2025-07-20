import { CircleCheck } from 'lucide-react'

export default function TestConnection(): React.JSX.Element {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="self-stretch w-full inline-flex flex-col justify-start items-start gap-2">
        <div className="self-stretch justify-start text-[#e3e3e3] text-sm font-bold font-['Pretendard'] leading-[21px]">
          연결 테스트
        </div>
        <div className="self-stretch p-5 bg-gradient-to-b from-[#1d1d1d] to-neutral-800 rounded-lg outline-1 outline-offset-[-1px] outline-[#383838] inline-flex justify-start items-start gap-4">
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
            <div className="text-center justify-start text-[#e3e3e3] text-base font-bold font-['Pretendard'] leading-normal">
              설정한 정보로 연결 테스트를 시작합니다.
            </div>
          </div>
          <div
            data-status="Point"
            className="size- px-3 py-1.5 bg-gradient-to-b from-[#4e18ff] to-[#4300d6] rounded-lg outline-1 outline-offset-[-1px] outline-white/20 flex justify-center items-center gap-2"
          >
            <div className="justify-start text-[#e3e3e3] text-xs font-semibold font-['Pretendard'] leading-[18px]">
              연결 테스트 시작하기
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch w-full inline-flex flex-col justify-start items-start gap-6">
        <div className="self-stretch p-5 bg-gradient-to-b from-[#1d1d1d] to-neutral-800 rounded-lg outline-1 outline-offset-[-1px] outline-[#383838] flex flex-col justify-start items-start gap-4">
          <div className="inline-flex justify-center items-center gap-2 text-[#e3e3e3]">
            <CircleCheck className="w-4 h-4 relative overflow-hidden" />
            <div className="text-center justify-start text-[#e3e3e3] text-base font-bold font-['Pretendard'] leading-normal">
              테스트 항목
            </div>
          </div>
          <div className="justify-start text-[#808080] text-xs font-medium font-['Pretendard'] leading-[18px]">
            드라이버 로드 확인
            <br />
            호스트 및 포트 접근성 확인
            <br />
            인증 정보 검증
            <br />
            데이터베이스 접근 권한 확인
            <br />
            기본 쿼리 실행 테스트
          </div>
        </div>
      </div>
    </div>
  )
}
