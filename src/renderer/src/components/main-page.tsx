import { JSX } from 'react'
import AppIcon from '../../../../resources/icon.png'
import { Button } from '@/components/ui/button'

/**
 * TODO: 메인 페이지
 */
export function MainPage(): JSX.Element {
  return (
    <div className={`flex flex-col gap-4 w-full h-screen items-center justify-center`}>
      <img src={AppIcon} className={`h-30 w-30`} />
      <p className={`text-xl font-bold`}>Qgenie</p>
      <Button
        className="bg-black text-white"
        onClick={() => {
          window.api.send('open-sub-window', {
            width: 600,
            height: 400,
            route: '/new-connection'
          })
        }}
      >
        모달 열기
      </Button>
    </div>
  )
}
