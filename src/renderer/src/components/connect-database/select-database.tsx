import { Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DATABASES, DatabaseInfo } from './type'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { DatabaseButton } from './database-button'

interface SelectDatabaseProp {
  selectedDatabase: DatabaseInfo | null
  setSelectedDatabase: (selectedDatabase: DatabaseInfo) => void
  connectionName: string
  setConnectionName: (name: string) => void
}

export function SelectDatabase({
  selectedDatabase,
  setSelectedDatabase,
  connectionName,
  setConnectionName
}: SelectDatabaseProp): React.JSX.Element {
  const [searchText, setSearchText] = useState<string>('')

  const filteredDatabases = DATABASES.filter((db) =>
    db.label.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <div className="self-stretch flex flex-col justify-start items-start gap-6">
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <div className="self-stretch justify-start text-[#e3e3e3] text-sm font-bold font-['Pretendard'] leading-[21px]">
          데이터베이스 종류
        </div>
        <div className="relative w-full">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search className="size-4" />
          </div>
          <Input
            className="w-full pl-9 pr-8 text-xs text-white font-medium font-['Pretendard'] leading-[18px]
                      bg-[#1c1c1c] rounded-lg border border-[#383838] transition duration-150
                      focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0 focus:border-[#9F73FF]"
            placeholder="예: MySQL, PostgreSQL"
            value={searchText}
            spellCheck={false}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {searchText && (
            <Button
              className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
              onClick={() => setSearchText('')}
              aria-label="검색어 초기화"
            >
              <X className="size-4" />
            </Button>
          )}
        </div>
        <div
          className="
              w-full h-64 overflow-y-scroll
              self-stretch p-5 bg-gradient-to-b from-[#1d1d1d] to-neutral-800 rounded-lg outline-1 
              outline-offset-[-1px] outline-[#383838] grid grid-cols-4 gap-4 place-items-start"
        >
          {filteredDatabases.map((databaseInfo) => (
            <DatabaseButton
              key={databaseInfo.key}
              databaseInfo={databaseInfo}
              isSelected={selectedDatabase?.key === databaseInfo.key}
              setSelectedDatabase={setSelectedDatabase}
            />
          ))}
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <div className="self-stretch flex flex-col justify-start items-start gap-1">
          <div className="self-stretch justify-start text-[#e3e3e3] text-sm font-bold font-['Pretendard'] leading-[21px]">
            데이터베이스 연결 이름
          </div>
          <div className="self-stretch justify-start text-[#808080] text-xs font-medium font-['Pretendard'] leading-[18px]">
            이 연결을 나중에 쉽게 찾을 수 있도록 이름을 정할 수 있어요.
          </div>
        </div>

        <div className="relative w-full">
          <Input
            className="w-full pr-8 text-xs text-white font-medium font-['Pretendard'] leading-[18px]
                bg-gradient-to-b from-[#1d1d1d] to-neutral-800 rounded-lg border border-[#383838] transition duration-150
                focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0 focus:border-[#9F73FF]"
            placeholder="예: 인사 데이터, 고객 관리"
            value={connectionName}
            spellCheck={false}
            onChange={(e) => setConnectionName(e.target.value)}
          />
          {connectionName && (
            <Button
              className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
              onClick={() => setConnectionName('')}
              aria-label="연결 이름 초기화"
            >
              <X className="size-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
