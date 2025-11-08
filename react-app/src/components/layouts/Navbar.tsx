import clsx from 'clsx'
import { Link, useLocation } from 'react-router'

import type { IconName } from '@/components/icon/Icon'
import { Icon } from '@/components/icon/Icon'
import { ROUTER_CONFIG } from '@/router/config'

type NavItem = {
  id: string
  label: string
  icon: IconName
  pathName: string
}

const navigationItems: NavItem[] = [
  { id: 'records', label: '自分の記録', icon: 'memo', pathName: ROUTER_CONFIG.MY_RECORD },
  { id: 'challenge', label: 'チャレンジ', icon: 'challenge', pathName: '' },
]

export const NavBar = () => {
  const location = useLocation()
  return (
    <nav
      role='navigation'
      className='hidden md:flex'
    >
      {navigationItems.map(item => (
        <Link
          to={item.pathName}
          key={item.id}
          className='flex items-center gap-2 pr-4 pl-2 text-white'
        >
          <Icon
            color='#FF963C'
            name={item.icon}
            size={32}
          />
          <span
            className={clsx('w-24 text-base leading-[23px]', {
              ['text-primary-400']: location.pathname === item.pathName,
            })}
          >
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  )
}
