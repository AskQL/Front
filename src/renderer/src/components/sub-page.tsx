import { JSX } from 'react'
import AppIcon from '../../../../resources/icon.png'

/**
 * TODO: 모달
 */
export function SubPage(): JSX.Element {
  return (
    <div className={`flex flex-col gap-4 w-full h-screen items-center justify-center`}>
      <img src={AppIcon} className={`h-12 w-12`} />
      <p className={`text-xl font-bold bg-blue-600`}>모달</p>
    </div>
  )
}
