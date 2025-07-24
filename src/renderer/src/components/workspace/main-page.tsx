import { Sidebar } from '../layout/side-bar'
import WorkSpace from './workspace'
import { WorkspaceEmptyState } from './workspace-empty-state'

export function MainPage(): React.JSX.Element {
  // TODO: DB 연결 상태에 따라 WorkspaceEmptyState 또는 WorkSpace를 렌더링해야 함
  const isConnected = true // 이 값은 실제 DB 연결 상태에 따라 동적으로 변경되어야 함

  return (
    <div className="w-screen h-screen bg-zinc-900 flex overflow-hidden">
      <Sidebar />
      {isConnected ? <WorkSpace /> : <WorkspaceEmptyState />}
    </div>
  )
}
