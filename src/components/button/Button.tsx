import { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({
  children,
  type = 'button',
  ...props
}: Props) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className="py-1 px-3 rounded-md bg-blue-500 hover:bg-blue-700 text-white"
      {...props}
    >
      {children}
    </button>
  );
}
