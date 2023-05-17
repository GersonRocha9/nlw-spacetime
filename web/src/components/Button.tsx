import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void
}

export function Button({ onClick }: ButtonProps) {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md"
      onClick={onClick}
    >
      Clique aqui
    </button>
  )
}
