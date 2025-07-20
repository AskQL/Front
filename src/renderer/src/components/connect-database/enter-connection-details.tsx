import { X } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { ConnectionDeatil } from './type'

interface EnterConnectionDetailsProp {
  connectionDetail: ConnectionDeatil
  setConnectionDetail: (connectionDetail: ConnectionDeatil) => void
}
export default function EnterConnectionDetails({
  connectionDetail,
  setConnectionDetail
}: EnterConnectionDetailsProp): React.JSX.Element {
  return (
    <div className="self-stretch inline-flex flex-col justify-start items-start gap-6">
      <div className="self-stretch inline-flex justify-start items-start gap-2">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
          <div className="self-stretch justify-start text-[#e3e3e3] text-sm font-bold font-['Pretendard'] leading-[21px]">
            호스트
          </div>
          <div className="relative w-full">
            <Input
              value={connectionDetail.host !== null ? connectionDetail.host : ''}
              onChange={(e) => setConnectionDetail({ ...connectionDetail, host: e.target.value })}
              className="w-full pr-8 text-xs text-white font-medium font-['Pretendard'] leading-[18px]
                bg-gradient-to-b from-[#1d1d1d] to-neutral-800 rounded-lg border border-[#383838] transition duration-150
                focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0 focus:border-[#9F73FF]"
              placeholder="localhost"
              spellCheck={false}
            />
            <Button
              className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
              onClick={() => setConnectionDetail({ ...connectionDetail, host: null })}
            >
              <X className="size-4" />
            </Button>
          </div>
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
          <div className="self-stretch justify-start text-[#e3e3e3] text-sm font-bold font-['Pretendard'] leading-[21px]">
            포트
          </div>
          <div className="relative w-full">
            <Input
              value={connectionDetail.port !== null ? connectionDetail.port.toString() : ''}
              onChange={(e) =>
                setConnectionDetail({
                  ...connectionDetail,
                  port: Number(e.target.value)
                })
              }
              placeholder="3306"
              spellCheck={false}
              className="w-full pr-8 text-xs text-white font-medium font-['Pretendard'] leading-[18px]
                bg-gradient-to-b from-[#1d1d1d] to-neutral-800 rounded-lg border border-[#383838] transition duration-150
                focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0 focus:border-[#9F73FF]"
            />
            <Button
              className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
              onClick={() => setConnectionDetail({ ...connectionDetail, port: null })}
            >
              <X className="size-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="self-stretch inline-flex justify-start items-start gap-2">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
          <div className="self-stretch justify-start text-[#e3e3e3] text-sm font-bold font-['Pretendard'] leading-[21px]">
            사용자명
          </div>
          <div className="relative w-full">
            <Input
              value={connectionDetail.username ?? ''}
              onChange={(e) =>
                setConnectionDetail({
                  ...connectionDetail,
                  username: e.target.value
                })
              }
              placeholder="username"
              spellCheck={false}
              className="w-full pr-8 text-xs text-white font-medium font-['Pretendard'] leading-[18px]
                bg-gradient-to-b from-[#1d1d1d] to-neutral-800 rounded-lg border border-[#383838] transition duration-150
                focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0 focus:border-[#9F73FF]"
            />
            <Button
              className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
              onClick={() => setConnectionDetail({ ...connectionDetail, username: null })}
            >
              <X className="size-4" />
            </Button>
          </div>
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
          <div className="self-stretch justify-start text-[#e3e3e3] text-sm font-bold font-['Pretendard'] leading-[21px]">
            비밀번호
          </div>
          <div className="relative w-full">
            <Input
              value={connectionDetail.password ?? ''}
              onChange={(e) =>
                setConnectionDetail({
                  ...connectionDetail,
                  password: e.target.value
                })
              }
              placeholder="password"
              spellCheck={false}
              className="w-full pr-8 text-xs text-white font-medium font-['Pretendard'] leading-[18px]
                bg-gradient-to-b from-[#1d1d1d] to-neutral-800 rounded-lg border border-[#383838] transition duration-150
                focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0 focus:border-[#9F73FF]"
            />
            <Button
              className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
              onClick={() => setConnectionDetail({ ...connectionDetail, password: null })}
            >
              <X className="size-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <div className="self-stretch justify-start text-[#e3e3e3] text-sm font-bold font-['Pretendard'] leading-[21px]">
          데이터베이스명
        </div>
        <div className="relative w-full">
          <Input
            value={connectionDetail.databaseName ?? ''}
            onChange={(e) =>
              setConnectionDetail({
                ...connectionDetail,
                databaseName: e.target.value
              })
            }
            placeholder="ex. my-database"
            spellCheck={false}
            className="w-full pr-8 text-xs text-white font-medium font-['Pretendard'] leading-[18px]
                bg-gradient-to-b from-[#1d1d1d] to-neutral-800 rounded-lg border border-[#383838] transition duration-150
                focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0 focus:border-[#9F73FF]"
          />
          <Button
            className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
            onClick={() => setConnectionDetail({ ...connectionDetail, databaseName: null })}
          >
            <X className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
