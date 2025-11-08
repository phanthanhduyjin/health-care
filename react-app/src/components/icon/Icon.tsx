import type { CSSProperties } from "react"

import ChallengeIcon from '@/assets/icons/icon_challenge.svg?react'
import CloseIcon from '@/assets/icons/icon_close.svg?react'
import CupIcon from '@/assets/icons/icon_cup.svg?react'
import InfoIcon from '@/assets/icons/icon_info.svg?react'
import KnifeIcon from '@/assets/icons/icon_knife.svg?react'
import MemoIcon from '@/assets/icons/icon_memo.svg?react'
import MenuIcon from '@/assets/icons/icon_menu.svg?react'

const icons = {
  challenge: ChallengeIcon,
  cup: CupIcon,
  info: InfoIcon,
  knife: KnifeIcon,
  memo: MemoIcon,
  menu: MenuIcon,
  close: CloseIcon,
} as const

export type IconName = keyof typeof icons

type IconProps = {
  name: IconName
  size?: number | string
  color?: string
  className?: string
  style?: CSSProperties
}

export const Icon = ({
  name,
  size = 24,
  color = 'currentColor',
  className = '',
  style,
}: IconProps) => {
  const SvgIcon = icons[name]

  return (
    <SvgIcon
      width={size}
      height={size}
      fill={color}
      color={color}
      className={className}
      style={style}
      aria-label={name}
    />
  )
}