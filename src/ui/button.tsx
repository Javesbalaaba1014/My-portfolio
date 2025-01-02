interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost'
  className?: string
  children: React.ReactNode
}

export function Button({ 
  variant = 'default', 
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  return (
    <button 
      className={`px-4 py-2 rounded-lg transition-colors ${
        variant === 'ghost' ? 'hover:bg-purple-800/50' : 'bg-purple-600 hover:bg-purple-700'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  )
} 