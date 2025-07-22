import { Button } from '@/components/ui/button'
import AppIcon from '@renderer/assets/icon.svg'
import { Database, Plus, Settings, Tag } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { NavItem } from '../workspace/types'

const topNavItems: NavItem[] = [
  { id: 'database', icon: Database, active: true },
  { id: 'tags', icon: Tag, disabled: true } // DB 연결 후에 disabled: false
]

const bottomNavItems: NavItem[] = [
  { id: 'settings', icon: Settings },
  { id: 'add', icon: Plus }
]

function NavButton({ item }: { item: NavItem }): React.JSX.Element {
  const Icon = item.icon
  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        'size-10 rounded-lg',
        item.active && 'bg-neutral-700 outline-1 outline-offset-[-1px] outline-white/20',
        !item.active && 'hover:bg-neutral-700/50',
        item.disabled && 'cursor-not-allowed'
      )}
      onClick={item.onClick}
      disabled={item.disabled}
    >
      <Icon
        className={cn(
          'size-6',
          item.active && 'stroke-neutral-200',
          !item.active && !item.disabled && 'stroke-neutral-500',
          item.disabled && 'stroke-neutral-700'
        )}
      />
    </Button>
  )
}

export function Sidebar(): React.JSX.Element {
  return (
    <aside className="h-full flex flex-col bg-zinc-900 p-4 items-center gap-6">
      <img src={AppIcon} className="size-6" alt="QGenie" />
      <div className="flex-1 flex flex-col justify-between items-start">
        <nav className="flex flex-col justify-start items-start gap-2">
          {topNavItems.map((item) => (
            <NavButton key={item.id} item={item} />
          ))}
        </nav>
        <nav className="flex flex-col justify-start items-start gap-2">
          {bottomNavItems.map((item) => (
            <NavButton key={item.id} item={item} />
          ))}
        </nav>
      </div>
    </aside>
  )
}
