import { JSX, useEffect, useState } from 'react'
import { SelectDatabase } from './connect-database/select-database'
import { ConnectionDeatil, DatabaseInfo, DBSetupStep } from './connect-database/type'
import Sidebar from './connect-database/sidebar'
import { FooterButtons } from './connect-database/footer-buttons'
import InstallDriver from './connect-database/install-driver'
import { toast } from 'sonner'
import EnterConnectionDetails from './connect-database/enter-connection-details'
import TestConnection from './connect-database/test-connection'
import ConfirmSettings from './connect-database/confirm-settings'

/**
 * TODO: 모달
 */
export function SubPage(): JSX.Element {
  const [activeTab, setActiveTab] = useState<DBSetupStep>(DBSetupStep.SelectDatabase)
  const [selectedDatabase, setSelectedDatabase] = useState<DatabaseInfo | null>(null)

  const [connectionDetail, setConnectionDetail] = useState<ConnectionDeatil>({
    nickname: null,
    databaseName: '',
    username: null,
    password: null,
    host: 'localhost',
    port: 3306,
    databaseType: null
  })

  useEffect(() => {
    if (selectedDatabase) {
      setConnectionDetail((prev) => ({
        ...prev,
        databaseType: selectedDatabase.key
      }))
    }
  }, [selectedDatabase])

  const moveStep = (nextStep: DBSetupStep): void => {
    if (
      activeTab === DBSetupStep.SelectDatabase &&
      nextStep === DBSetupStep.InstallDriver &&
      selectedDatabase === null
    ) {
      toast.error('데이터베이스를 선택하세요')
      return
    }

    if (
      activeTab === DBSetupStep.EnterConnectionDetails &&
      nextStep === DBSetupStep.TestConnection
    ) {
      /**
       * TODO: 에러 필드 테두리 색깔 바꾸기
       */
      if (!connectionDetail.databaseName) {
        toast.error('데이터베이스 이름을 입력하세요')
        return
      }
      if (!connectionDetail.host) {
        toast.error('호스트를 입력하세요')
        return
      }
      if (!connectionDetail.port) {
        toast.error('포트를 입력하세요')
        return
      }
    }
    setActiveTab(nextStep)
  }

  return (
    <div className={`flex w-full h-screen items-center justify-center`}>
      <Sidebar activeTab={activeTab} />

      <div className="self-stretch h-full bg-[#1c1c1c] inline-flex justify-start items-center">
        <div className="w-[520px] h-full p-6 bg-[#272727] inline-flex flex-col justify-between items-start space-y-6">
          {activeTab === DBSetupStep.SelectDatabase && (
            <SelectDatabase
              selectedDatabase={selectedDatabase}
              setSelectedDatabase={setSelectedDatabase}
              connectionName={connectionDetail.nickname ? connectionDetail.nickname : ''}
              setConnectionName={(value) => {
                setConnectionDetail((prev) => ({ ...prev, nickname: value }))
              }}
            />
          )}
          {activeTab === DBSetupStep.InstallDriver && selectedDatabase !== null && (
            <InstallDriver selectedDatabase={selectedDatabase!} />
          )}
          {activeTab === DBSetupStep.EnterConnectionDetails && (
            <EnterConnectionDetails
              connectionDetail={connectionDetail}
              setConnectionDetail={setConnectionDetail}
            />
          )}
          {activeTab === DBSetupStep.TestConnection && <TestConnection />}
          {activeTab === DBSetupStep.ConfirmSettings && (
            <ConfirmSettings connectionDetail={connectionDetail} />
          )}
          <FooterButtons
            activeTab={activeTab}
            setActiveTab={(nextStep: DBSetupStep) => {
              moveStep(nextStep)
            }}
          />
        </div>
      </div>
    </div>
  )
}
