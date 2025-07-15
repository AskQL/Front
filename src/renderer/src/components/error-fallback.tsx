import { JSX, useCallback, useEffect, useRef } from 'react'
import { toast } from 'sonner'

export default function ErrorFallback({ error }: { error: Error }): JSX.Element {
  const hasShownToast = useRef(false)

  /**
   * FIXME: 버전 하드코딩 되어 있음
   */
  const APP_VERSION = '0.0.1'

  const handleSendMail = useCallback((): void => {
    const subject = encodeURIComponent(`[Qgenie] ${APP_VERSION} - 오류 보고`)
    /**
     * TODO: 메일 양식 구체화
     */
    const body = encodeURIComponent(
      [`오류 메시지:\n${error.message}`, `\n애플리케이션 정보:`, `\n사용자 환경:`].join('\n\n')
    )

    /**
     * TODO: 오류 보고 메일 수정
     */
    const mailtoLink = `mailto:sample@sample.com?subject=${subject}&body=${body}`
    window.electron?.ipcRenderer?.send?.('mailto-external', mailtoLink)
  }, [error])

  useEffect(() => {
    if (!hasShownToast.current) {
      toast.error('예기치 않은 오류가 발생했습니다.', {
        description: '오류 공유 버튼을 눌러 개발자에게 알려주세요.',
        action: {
          label: '공유',
          onClick: handleSendMail
        }
      })
      hasShownToast.current = true
    }
  }, [handleSendMail])

  /**
   * TODO: 오류 페이지 스타일링
   */
  return (
    <div className="flex flex-col gap-4 w-full h-screen overflow-hidden items-center justify-center">
      <div className="text-red-600 font-bold text-2xl">오류</div>
    </div>
  )
}
