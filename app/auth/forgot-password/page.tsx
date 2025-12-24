'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '../components/input'
import { SimpleUnderline } from '@/app/(app)/_components/simple-urderline'

const formSchema = z.object({
  currentPassword: z.string(),
  newPassword: z.string()
})

export default function SignIn() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: ''
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <div className="flex flex-col gap-6.75 mt-23 w-full h-full px-6">
      <div className="flex flex-col justify-center">
        <h2 className="font-sans text-2xl font-semibold capitalize">
          alterar senha
        </h2>
        <SimpleUnderline color="pink" position="horizontal" />
      </div>
      <div className="h-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-16 flex flex-col justify-between h-full"
          >
            <div className="flex flex-col gap-3 h-full">
              <FormField
                control={form.control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-normal">Senha atual</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite sua senha atual"
                        {...field}
                        password
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-normal">Nova senha</FormLabel>
                    <FormControl>
                      <Input placeholder="Nova senha" {...field} password />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-3 pb-35">
              <Button className="uppercase w-full font-medium font-poppins bg-gradient-pink text-sm text-white h-12.5">
                salvar
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
