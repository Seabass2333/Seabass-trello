import { Input } from '@/components/ui/input'
import { useFormStatus } from 'react-dom'

interface FormInputProps {
  errors?: {
    title?: string[]
  }
}

export const FormInput = ({ errors }: FormInputProps) => {
  return (
    <div>
      <Input type='text' name='title' required placeholder='please enter' className='border-black border p-1' />

      {errors?.title && (
        <div>
          {errors.title.map((error) => {
            return (
              <p key={error} className='text-rose-500'>
                {error}
              </p>
            )
          })}
        </div>
      )}
    </div>
  )
}
