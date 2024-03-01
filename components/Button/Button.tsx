'use client';

const Button = ({ children, onClick, disabled, className }: any) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={`${className} inline-flex h-10 w-[150px] items-center justify-center rounded-md bg-gray-900 px-11 text-sm font-medium text-gray-50 shadow-lg transition-colors disabled:pointer-events-none disabled:opacity-50`}
  >
    {children}
  </button>
);

export default Button;
