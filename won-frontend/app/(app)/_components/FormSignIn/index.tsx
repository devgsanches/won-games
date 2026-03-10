'use client'

import { useForm } from 'react-hook-form'

import { Button } from '@/app/(app)/_components/Button'
import { Field, FieldGroup, FieldSet } from '@/components/ui/field'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Heading } from '../Heading'
import { TextField } from '../TextField'

import { LockKeyhole, Mail } from 'lucide-react'
import Link from 'next/link'

type SignInFormData = {
  email: string
  password: string
}

export function FormSignIn() {
  const form = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  function onSubmit(data: SignInFormData) {
    console.log(data)
  }

  return (
    <div className="w-full max-w-md">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="text-black"
          noValidate
        >
          <FieldGroup>
            <FieldSet>
              <Heading
                text="Sign in"
                color="black"
                decorate={{ color: 'secondary', orientation: 'vertical' }}
                size="xxlarge"
              />

              <FieldGroup className="gap-3">
                {/* EMAIL */}
                <Field>
                  <FormField
                    control={form.control}
                    name="email"
                    rules={{
                      required: 'Email is required.',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Email is invalid.'
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <TextField
                            placeholder="Email"
                            type="email"
                            icon={<Mail />}
                            direction="left"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-error text-xs font-medium" />
                      </FormItem>
                    )}
                  />
                </Field>

                {/* SENHA */}
                <Field>
                  <FormField
                    control={form.control}
                    name="password"
                    rules={{
                      required: 'Password is required.',
                      minLength: {
                        value: 6,
                        message: 'Minimum of 6 characters.'
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <TextField
                            placeholder="Password"
                            type="password"
                            icon={<LockKeyhole />}
                            direction="left"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-error text-xs font-medium" />
                      </FormItem>
                    )}
                  />
                  <Link
                    href="/auth/forgot-password"
                    className="text-xs flex justify-end mt-1"
                  >
                    Forgot your password?
                  </Link>
                </Field>
              </FieldGroup>
            </FieldSet>

            {/* ACTIONS */}
            <Field orientation="vertical" className="space-y-3 gap-0 mt-10">
              <Button
                type="submit"
                variant="default"
                fullWidth
                className="uppercase font-sm font-medium"
                size="lg"
              >
                login
              </Button>

              <p className="font-normal text-center text-xs first-letter:uppercase">
                don't have an account yet?{' '}
                <Link
                  href="/auth/sign-up"
                  className="text-green-dark underline underline-offset-4 first-letter:uppercase inline-block"
                >
                  sign up
                </Link>
              </p>
            </Field>
          </FieldGroup>
        </form>
      </Form>
    </div>
  )
}
