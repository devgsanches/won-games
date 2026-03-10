import { Button } from '../Button'
import { TextField } from '../TextField'

export function ProfileForm() {
  return (
    <div className="flex flex-col justify-between flex-1">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-11.75">
        <TextField
          placeholder="John Doe"
          label="Full name"
          labelColor="text-black"
          type="text"
        />
        <TextField
          placeholder="joaom.oliveira@gmail.com"
          label="Email"
          labelColor="text-black"
          type="email"
        />
      </div>
      <div className="flex justify-end mt-4 md:mt-0">
        <div className="w-40 md:w-51.75">
          <Button size="lg" fullWidth>
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}
