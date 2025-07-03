import type { ButtonHTMLAttributes, FC } from 'react'
import clsx from 'clsx'
import S from './ButtonIcon.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonIcon: FC<ButtonProps> = (props) => {
  return (
    <button
      {...props}
      className={clsx(S.button, props.className)}
    >
      {props.children}
    </button>
  )
}
