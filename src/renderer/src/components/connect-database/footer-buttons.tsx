import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../ui/button'
import { DB_SETUP_STEPS, DBSetupStep } from './type'

interface FooterButtonsProp {
  activeTab: DBSetupStep
  setActiveTab: (acitveTab: DBSetupStep) => void
}

export const FooterButtons = ({
  activeTab,
  setActiveTab
}: FooterButtonsProp): React.JSX.Element => {
  const getPageIndex = (current: DBSetupStep, offset: number): DBSetupStep | null => {
    try {
      const index = DB_SETUP_STEPS.findIndex((step) => step.key === current)
      return DB_SETUP_STEPS[index + offset].key
    } catch {
      return current
    }
  }

  const onButtonClick = (nextMove: DBSetupStep | null): void => {
    if (nextMove === null) throw Error('오류')

    setActiveTab(nextMove)
  }

  return (
    <div className="self-stretch inline-flex justify-end items-center gap-2">
      <div
        className="bg-gradient-to-b from-[#444444] to-[#333333] rounded-lg 
              outline-1 outline-offset-[-1px] outline-white/20 flex justify-center items-center gap-2"
      >
        <Button
          onClick={() => onButtonClick(getPageIndex(activeTab, -1))}
          className="justify-start text-[#e3e3e3] text-xs font-semibold font-['Pretendard'] cursor-pointer"
        >
          <ChevronLeft className="size-3 relative overflow-hidden text-white" />
          이전
        </Button>
      </div>
      <div
        className="bg-gradient-to-b from-[#4e18ff] to-[#4300d6] rounded-lg 
              outline-1 outline-offset-[-1px] outline-white/20 flex justify-center items-center gap-2"
      >
        <Button
          onClick={() => onButtonClick(getPageIndex(activeTab, 1))}
          className="justify-start text-[#e3e3e3] text-xs font-semibold font-['Pretendard'] cursor-pointer"
        >
          다음
          <ChevronRight className="size-3 relative overflow-hidden text-white" />
        </Button>
      </div>
    </div>
  )
}
