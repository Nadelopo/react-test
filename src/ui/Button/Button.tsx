import type { ButtonHTMLAttributes, FC } from 'react'
import S from './Button.module.scss'

type ButtonProps = {

} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = (props) => {
  return (
    <button className={S.button} {...props}>
      {props.children}
    </button>
  )
}
