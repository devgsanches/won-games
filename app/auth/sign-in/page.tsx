'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '../components/input'
import Link from 'next/link'
import { SimpleUnderline } from '@/app/(app)/_components/simple-urderline'

const formSchema = z.object({
  email: z.email({
    message: 'E-mail inválido.'
  }),
  password: z.string()
})

export default function SignIn() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <div className="flex flex-col gap-6.75 mt-23 w-full px-6">
      <div className="flex items-center gap-2.75">
        <SimpleUnderline color="green" position="vertical" />
        <h2 className="font-sans text-2xl font-semibold">Entrar</h2>
      </div>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-16">
            <div className="flex flex-col gap-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="E-mail" {...field} email />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Senha" {...field} password />
                    </FormControl>
                    <FormDescription className="text-black text-end text-xs">
                      <Link href="forgot-password">Esqueceu sua senha?</Link>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-3">
              <Button className="uppercase w-full font-medium font-poppins bg-gradient-pink text-sm text-white h-12.5">
                entrar
              </Button>
              <p className="text-xs flex text-center items-center justify-center gap-1">
                Ainda não tem uma conta?
                <Link
                  href="/auth/sign-up"
                  className="font-medium text-ring-dark underline underline-offset-4"
                >
                  Cadastre-se
                </Link>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
