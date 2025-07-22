import { Sidebar } from '../layout/side-bar'
import { WorkspaceEmptyState } from './workspace-empty-state'

export function MainPage(): React.JSX.Element {
  return (
    <div className="w-screen h-screen min-w-[1280px] min-h-[832px] bg-zinc-900 flex overflow-hidden">
      <Sidebar />
      <WorkspaceEmptyState />
    </div>
  )
}
