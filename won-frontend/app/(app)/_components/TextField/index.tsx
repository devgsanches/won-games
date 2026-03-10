import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'

interface TextFieldProps extends React.ComponentProps<'input'> {
  label?: string
  placeholder: string
  labelColor?: 'text-white' | 'text-black'
  icon?: React.ReactNode
  error?: boolean
  errorMessage?: string
  direction?: 'left' | 'right'
  search?: boolean
}

export function TextField({
  label,
  placeholder,
  labelColor = 'text-black',
  icon,
  type,
  error: errorProp,
  errorMessage: errorMessageProp,
  direction = 'left',
  'aria-invalid': ariaInvalid,
  search = false,
  ...props
}: TextFieldProps) {
  const error = errorProp ?? (ariaInvalid === true || ariaInvalid === 'true')
  const errorMessage = errorMessageProp
  const iconPosition = direction === 'left' ? 'left' : 'right'
  const hasIcon = !!icon

  if (search) {
    return (
      <div className={`relative w-full ${label ? 'space-y-1' : ''}`}>
        {hasIcon && iconPosition === 'left' && (
          <div
            className={cn(
              'absolute left-3 top-0 h-full flex items-center justify-center z-10 pointer-events-none',
              error ? 'text-error' : 'text-input-text'
            )}
          >
            <div className="size-6 flex items-center justify-center">
              {icon}
            </div>
          </div>
        )}
        {label && (
          <Label className={cn(labelColor, 'text-sm font-light')}>
            {label}
          </Label>
        )}
        <Input
          placeholder={placeholder}
          className={cn(
            'rounded h-12.5 text-white text-base placeholder:text-gray bg-dark-gray border-none',
            'focus-visible:ring-0 focus-visible:border-transparent selection:bg-gray selection:text-white',
            error ? 'border-2 border-error' : 'border-none',
            hasIcon && iconPosition === 'left' && 'pl-12',
            hasIcon && iconPosition === 'right' && 'pr-12'
          )}
          type={type}
          aria-invalid={ariaInvalid}
          {...props}
        />
        {hasIcon && iconPosition === 'right' && (
          <div
            className={cn(
              'absolute right-3 top-0 h-full flex items-center justify-center z-10 pointer-events-none text-input-text'
            )}
          >
            <div className="size-6 flex items-center justify-center">
              {icon}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={`relative w-full ${label ? 'space-y-1' : ''}`}>
      {hasIcon && iconPosition === 'left' && (
        <div
          className={cn(
            'absolute left-3 top-0 h-full flex items-center justify-center z-10 pointer-events-none',
            error ? 'text-error' : 'text-input-text'
          )}
        >
          <div className="size-6 flex items-center justify-center">{icon}</div>
        </div>
      )}
      {label && (
        <Label className={cn(labelColor, 'text-sm font-light')}>{label}</Label>
      )}
      <Input
        placeholder={placeholder}
        className={cn(
          'rounded h-12.5 text-black text-base',
          error ? 'border-2 border-error' : 'border-none',
          hasIcon && iconPosition === 'left' && 'pl-12',
          hasIcon && iconPosition === 'right' && 'pr-12'
        )}
        type={type}
        aria-invalid={ariaInvalid}
        {...props}
      />
      {hasIcon && iconPosition === 'right' && (
        <div
          className={cn(
            'absolute right-3 top-0 h-full flex items-center justify-center z-10 pointer-events-none text-input-text'
          )}
        >
          <div className="size-6 flex items-center justify-center">{icon}</div>
        </div>
      )}
    </div>
  )
}
