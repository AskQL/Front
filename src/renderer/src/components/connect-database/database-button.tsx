import { DatabaseInfo } from './type'

interface DatabaseButtonProps {
  databaseInfo: DatabaseInfo
  isSelected: boolean
  setSelectedDatabase: (selectedDatabase: DatabaseInfo) => void
}

export const DatabaseButton = ({
  databaseInfo,
  isSelected,
  setSelectedDatabase
}: DatabaseButtonProps): React.JSX.Element => {
  return (
    <div
      data-isselect="False"
      className={`w-[100px] rounded-lg inline-flex flex-col justify-center items-center select-none cursor-pointer 
        ${isSelected && 'bg-gradient-to-b from-[#444444] to-[#333333] transition duration-200'}`}
      onClick={() => setSelectedDatabase(databaseInfo)}
    >
      <div className="w-[100px] h-20 flex overflow-hidden justify-center items-center">
        <img className="select-none" draggable={false} src={databaseInfo.icon} />
      </div>
      <div className="self-stretch h-9 inline-flex justify-center items-center gap-2.5">
        <div className="flex-1 h-[18px] text-center justify-start text-[#e3e3e3] text-xs font-medium font-['Pretendard'] leading-[18px]">
          {databaseInfo.label}
        </div>
      </div>
    </div>
  )
}
