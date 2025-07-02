import type { ButtonHTMLAttributes, FC } from 'react'
import S from './Button.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonIcon: FC<ButtonProps> = (props) => {
  return (
    <button className={S.button} {...props}>
      {props.children}
    </button>
  )
}
