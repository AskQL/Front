import { AlertCircle, Download, FolderOpen } from 'lucide-react'
import { DatabaseInfo } from './type'

interface InstallDriverProp {
  selectedDatabase: DatabaseInfo
}
export default function InstallDriver({ selectedDatabase }: InstallDriverProp): React.JSX.Element {
  return (
    <div className="self-stretch inline-flex flex-col justify-start items-start gap-2">
      <div className="self-stretch justify-start text-[#e3e3e3] text-sm font-bold font-['Pretendard'] leading-[21px]">
        드라이버 확인 및 설치
      </div>
      <div className="self-stretch p-5 bg-gradient-to-b from-[#1d1d1d] to-neutral-800 rounded-lg  outline-1 outline-offset-[-1px] outline-[#383838] flex flex-col justify-start items-start gap-4">
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="size- inline-flex flex-col justify-start items-start gap-1">
            <div className="text-center justify-start text-[#e3e3e3] text-base font-bold font-['Pretendard'] leading-normal">
              {selectedDatabase.label} JDBC 드라이버
            </div>
            <div className="flex items-center gap-1">
              <AlertCircle className="text-[#e1368c] size-4" />
              <span className="text-[#e1368c] text-xs font-medium font-['Pretendard']">
                드라이버가 설치되지 않음
              </span>
            </div>
          </div>
          <div className="size- flex justify-start items-center gap-2">
            <div
              data-status="Point Left"
              className="size- px-3 py-1.5 bg-gradient-to-b from-[#4e18ff] to-[#4300d6] rounded-lg  outline-1 outline-offset-[-1px] outline-white/20 flex justify-center items-center gap-2"
            >
              <Download data-icons="download" className="size-3 relative overflow-hidden" />
              <div className="justify-start text-[#e3e3e3] text-xs font-semibold font-['Pretendard'] leading-[18px]">
                자동 다운로드
              </div>
            </div>
            <div className="size- px-3 py-1.5 bg-gradient-to-b from-[#444444] to-[#333333] rounded-lg  outline-1 outline-offset-[-1px] outline-white/20 flex justify-center items-center gap-2">
              <FolderOpen className="size-3 relative overflow-hidden" />
              <div className="justify-start text-[#e3e3e3] text-xs font-semibold font-['Pretendard'] leading-[18px]">
                수동 설치
              </div>
            </div>
          </div>
        </div>
        <div className="size- flex flex-col justify-start items-start gap-1">
          <div className="self-stretch inline-flex justify-start items-start gap-2">
            <div className="text-center justify-start text-[#808080] text-xs font-medium font-['Pretendard'] leading-[18px]">
              버전
            </div>
            <div className="text-center justify-start text-[#e3e3e3] text-xs font-medium font-['Pretendard'] leading-[18px]">
              0.0.0
            </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-start gap-2">
            <div className="text-center justify-start text-[#808080] text-xs font-medium font-['Pretendard'] leading-[18px]">
              파일명
            </div>
            <div className="text-center justify-start text-[#e3e3e3] text-xs font-medium font-['Pretendard'] leading-[18px]">
              mysql-connector-java-8.0.33.jar
            </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-start gap-2">
            <div className="text-center justify-start text-[#808080] text-xs font-medium font-['Pretendard'] leading-[18px]">
              크기
            </div>
            <div className="text-center justify-start text-[#e3e3e3] text-xs font-medium font-['Pretendard'] leading-[18px]">
              1.23 MB
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
