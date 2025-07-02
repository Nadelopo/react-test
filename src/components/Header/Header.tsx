import type { FC } from 'react'
import LogoIcon from '@/assets/icons/logo_icon.svg?react'
import { ThemeSwitcher } from '../ThemeSwitcher'
import S from './Header.module.scss'

export const Header: FC = () => {
  return (
    <div className={`container ${S.header}`}>
      <LogoIcon className={S.logo} />
      <ThemeSwitcher />
    </div>
  )
}
